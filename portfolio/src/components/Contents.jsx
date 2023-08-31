import React from 'react';

const Contents = () => {
  return (
    <section className="mt-16">
      <div className="px-6 py-8 md:mx-6 rounded-3xl bg-secondary">
        <h2 className="mb-6 text-xl font-bold lg:mb-8">目次</h2>
        <ul className="list-inside list-disc">
          <li className="py-2 text-link">
            <a href="" className="c-link font-medium">
              私について
            </a>
          </li>
          <li className="py-2 text-link">
            <a href="" className="c-link font-medium">
              スキルと特徴
            </a>
          </li>
          <li className="py-2 text-link">
            <a href="" className="c-link font-medium">
              作品について
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contents;
