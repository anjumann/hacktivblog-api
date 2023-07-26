import { NextResponse } from 'next/server'
 
 const handler = () =>{
  const data = 'Backend APIs for hacktive website' 
  return NextResponse.json(data)

}


export { handler as POST, handler as GET , handler as PUT , handler as DELETE }