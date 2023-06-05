import { useRouter } from "next/router"

function Comments() {
  const router=useRouter()
  console.log(router)
  return (
    <div>
      id:{router.query.userId}
      <br/>
      comments:{router.query.comments}
    </div>
  )
}

export default Comments