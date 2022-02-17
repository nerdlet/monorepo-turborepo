import  { MuiButtonExample, Typography, Page, Link } from 'core'

export default function Docs({...props}) {
  return (
    <div>
      <h1>Example Docs </h1>
      <MuiButtonExample />
      <Typography/>
      <Link href="/home">this is a link</Link>
      <Page {...props}/>
    </div>
  );
}
