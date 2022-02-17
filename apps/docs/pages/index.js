import  { MuiButtonExample, Typography, Page } from 'core'

export default function Docs({...props}) {
  return (
    <div>
      <h1>Example Docs </h1>
      <MuiButtonExample />
      <Typography/>
      <Page {...props}/>
    </div>
  );
}
