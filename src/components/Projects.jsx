import React from "react"

function Projects() {
  const projectList = [
    {title: "健康アプリのWEB開発", description:"コードレビュー, AWSログ解析, テスト全般作業", stack:"AWS, python"},
    {title: "ECサイトのWEB開発", description:"ウォーターフォール開発、テスト全般", stack: "html, php"},
    {title: "通信会社の自社ツール開発", description:"アジャイル開発", stack:"Linux, Vue, python"},
  ]

  return(
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <span className="block mt-4 text-blue-400">{project.stack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects