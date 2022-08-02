import { useEffect, useState } from "react"
import { gitReposApi } from "./services/api"

interface ResposProps {
  name: string,
  private: boolean
}


export function App(){
  const [repos,setRepos] = useState<ResposProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(gitReposApi).then(response => response.json())
    .then(data => setRepos(() => data))
  },[])

  const reposFiltered = repos.filter(repo => {
    return repo.name.includes(search)
  })  

  
  
  return(
    <main>
      <input 
        type="text" 
        placeholder= "digite o nome do repositório"
        value={search}
        onChange={(event)=>{setSearch(event.target.value)}} 
      
      />
      <hr />
      <ul>
        {
          reposFiltered.map(repo => <li key={repo.name}>{repo.name}</li>)
        }
      </ul>

    </main>
  )
}