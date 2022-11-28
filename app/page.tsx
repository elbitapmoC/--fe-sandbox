"use client";

import Nav from './nav';
import Title from './title';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ToggleLighting from './(icons)/toggleLighting';

export default function HomePage() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const fetchData = async (owner: string, repo: string) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const json = await response.json();
      if (json.message) {
        setError(true);
      } else {
        setError(false);
        router.push(`kanban/${owner}/${repo}`);
      }
    } catch (err) {
      console.error('🦄: ', err)
      setError(true);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let ownerAndRepo = value.substring(value.indexOf('.com/') + 5); // codesandbox/sandpack
    let owner = ownerAndRepo.substring(0, ownerAndRepo.indexOf('/')); // codesandbox
    let repo = ownerAndRepo.substring(ownerAndRepo.indexOf('/') + 1); // sandpack;
    fetchData(owner, repo);
  }

  return (
    <main className="main">
      <ToggleLighting />
      <section className="w-full grid xl:grid-cols-3 sm:grid-cols-1 gap-4">
        <Nav />
        <aside className="col-span-2"><Title text="Start by pasting the repository URL" /></aside>
        <form className="grid grid--1fr--auto col-start-2 col-span-2 mt-24" onSubmit={handleSubmit}>
          <input placeholder='https://' type="url" className='py-2 bg-transparent bb-1' onChange={handleChange} />
          <input type="submit" value='Submit' className='ml-2.5 py-2 px-4 button rounded' />
          {error === true ? <p className='pt-5 red'>Oops! Something went wrong. Try something like this:<br />https://github.com/freeCodeCamp/chapter</p> : null}
        </form>
      </section>
    </main>
  )
}