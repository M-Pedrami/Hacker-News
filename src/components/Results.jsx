export default function Results ({results}) {
  console.log(results)
  if (results.length == 0) {
    return <h1>No Results</h1>
  }else {
    return (<div>
      <h1>Here are the Results</h1>
      {results.map((result) => (
        <div key={result.objectID}>
          <h3>{result.title}</h3>
          </div>
      ) )}
    </div>)
  }
}
  