import React from 'react'

const ResponseBody = (props) => {
  const columnsResponses = props.responsesData.map((column, index) => {
    return (
      <tc key={index}>
        <td>{column.recommended_artist}<br />
        {column.album_name}<br />
        {column.release_date}<br />
        {column.album_image}</td>
      </tc>
    )
  }
)

  return (
    <tbody>{columnsResponses}</tbody>
  )
}


const Table = (props) => {
  const { responsesData } = props

  return (
    <div>
      <table>
        <ResponseBody responsesData={responsesData} />
      </table>
    </div>
  )
}

export default Table
