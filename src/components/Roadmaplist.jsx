import React from 'react'

const Roadmaplist = () => {
  return (
    <>
      <div className="container roadmap-header">
        <h1>Roadmaps</h1>
      </div>
      <main className="page-content">
        <a href='roadmap/frontend' className="card">
          <div className="content">
            <h2 className="title">Frontend Developer</h2>
            <p className="">Step by step untuk menjadi frontend developer</p>
          </div>
        </a>
        <a href='' className="card">
          <div className="content">
            <h2 className="title">Backend Developer</h2>
            <p className="">Step by step untuk menjadi backend developer</p>
          </div>
        </a>

      </main>
    </>
  )
}

export default Roadmaplist