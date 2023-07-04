import React from 'react';

export default function Home() {
  return (
    <main>
      <section className='container'>
        <figure>
          <img src='/images/illustration-mockups.svg' alt='testing' />
        </figure>
        <div className='text-container'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className='btn'>Register</button>
        </div>
      </section>
    </main>
  );
}
