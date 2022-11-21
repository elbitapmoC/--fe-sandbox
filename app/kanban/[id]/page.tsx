import Image from "next/image";
import { Patient } from "../../../typings";
import { notFound } from 'next/navigation';
import Back from "../../back";
export const dynamicParams = true;

async function getPatient(patientId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/cvs/records/${patientId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

type PageProps = {
  params: {
    id: string
  }
}

export default async function PatientPage({ params }: PageProps) {
  const patient = await getPatient(params.id);
  const {
    firstName,
    frequency,
    img,
    lastName,
    prescription,
    progress,
    route,
    strength,
    unit }: Patient = patient;

  if (!patient || patient.length < 1) return notFound();

  return (
    <div className="main">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="hover:bg-gray-900 w-full max-w-sm bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700">
          <div className="flex flex-col items-center pt-10 pb-10 pl-16 pr-16">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={img}
              alt={`Picture of ${firstName} ${lastName}`}
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {firstName} {lastName}
            </h5>
            {progress}
            <span className="text-sm text-gray-400 mt-4">
              <ul>
                <li><span>{strength} {unit} of {prescription}</span></li>
                <li><span>{frequency}</span></li>
                <li><span>{route}</span></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <Back />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/cvs/records/`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  const items = data.items as any[];
  return items.map((item) => ({
    id: item.id.toString(),
  }))
}