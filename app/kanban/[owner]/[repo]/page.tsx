import Back from "../../../(icons)/back";
import Stargazers from "../../../(icons)/stargazers";
import Title from "../../../title";
import Description from "../../../description";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PageProps = {
  params: {
    owner: string,
    repo: string
  }
}

// .id
// .name
// .description
// .stargazers_count
// .branches_url
// https://github.com/codesandbox/sandpack

const Page = ({ params }: PageProps) => {
  const { owner, repo } = params;

  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;


  return (
    <main className="main shade-2">
      <div>{isFetching ? "Updating..." : ""}</div>

      <section className="w-full grid grid-cols-3 gap-4 mb-24">
        <Back />
        <aside>
          <Title text="{data.name}" />
          <Description text="A component toolkit for creating live-running code editing experiences, using the power of CodeSandbox." />
        </aside>
        <Stargazers gazers={10332} />
      </section>
      <section className="w-full grid grid-cols-3 gap-4 mb-24">
        <aside>
          <span className='font-xs'>In progress (9)</span>
        </aside>
        <aside>
          <span className='font-xs'>Review (1)</span>
        </aside>
        <aside>
          <span className='font-xs'>Ready to merge (1)</span>
        </aside>
      </section>
    </main>
  )
}

export default Page