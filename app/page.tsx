"use client";

import Nav from './nav';
import Title from './title';
import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const fetchData = async (owner, repo) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const json = await response.json();
      if (json.message === "Not Found") {
        setError(true);
      } else {
        setError(false);
        setData(json);
      }
    } catch (err) {
      setError(true);
      console.error('🦄: ', err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let ownerAndRepo = value.substring(value.indexOf('.com/') + 5); // codesandbox/sandpack
    let owner = ownerAndRepo.substring(0, ownerAndRepo.indexOf('/')); // codesandbox
    let repo = ownerAndRepo.substring(ownerAndRepo.indexOf('/') + 1); // sandpack;
    fetchData(owner, repo);
  }

  return (
    <main className="main">
      <style jsx>{
        `
        .button{
          background-color: var(--color-shade-4);
          color: var(--color-shade-1);
        }

        .text-red {
          color: var(--color-shade-red);
        }
        `
      }
      </style>
      <section className="w-full grid grid-cols-3 gap-4">
        <Nav />
        <aside className="col-span-2"><Title text="Start by pasting the repository URL" /></aside>
        <form className="grid grid--1fr--auto col-start-2 col-span-2 mt-24" onSubmit={handleSubmit}>
          <input placeholder='https://' type="url" className='py-2 bg-transparent bb-1' onChange={handleChange} />
          <input type="submit" value='Submit' className='ml-2.5 py-2 px-4 button rounded' />
          {error === true ? <p className='pt-5 text-red'>Oops! Something went wrong. Try again.</p> : null}
        </form>
      </section>
    </main>
  )
}
