import Link from 'next/link'
import styles from './Notes.module.css'
import PocketBase from 'pocketbase'
import CreateNote from './CreateNote'


// Change cache behaviour and runtime, necessary if not using fetch
// export const dynamic = 'auto',
// dynamicParams = true,
//  revalidate = 0,
//  fetchCache = 'auto',
//  runtime = 'nextjs',
//  preferredRegion = 'auto'

async function getNotes() {
  //const db = new PocketBase('http://127.0.0.1:8090')
  //const data = await db.collection('Notes').getList(1, 30)

  
  // points to the notes collection and retrieves page 1 with 30 results per page -> pocketbase
  // if we add { cache: no-store } it will refetch the items in the server in every request
  // Equivalent to getServerSideProps
  // It is not necessary to use the fetch API
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30' , { cache: 'no-store' }) 
  // convert to json
  const data = await res.json()
  return data?.items as any[]
}
export default async function NotesPage() {
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}