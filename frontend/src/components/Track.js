import React, { useEffect, useState } from 'react'

const Track = () => {

  const [issueList, setIssueList] = useState([]);

  const url = 'http://localhost:5000';


  const getDataFromBackend = async () => {

    const response = await fetch('http://localhost:5000/issue/getall')
    const data = await response.json();
    console.log(data);
    setIssueList(data);
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const updateStatus = async (newStatus, id) => {
    await fetch(url+'/issue/update/'+id, {
      method: 'PUT',
      body : JSON.stringify({
        status : newStatus
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    getDataFromBackend();
  }

  const getBadge = (status) => {
    if(status==='Pending')
    return 'badge-danger'
    else if(status==='Solved')
    return 'badge-success'
    else if(status==='Inprogress')
    return 'badge-warning'
  }

  const displayData = () => {
    return <table className='table table-light table-striped'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Assigned By</th>
          <th>Assigned To</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          issueList.map((user) => (
            <tr>
              <td>{user.title}</td>
              <td>{user.category}</td>
              <td>{user.assignedby}</td>
              <td>{user.assignedto}</td>
              <td>
              <span class={"badge rounded-pill d-inline "+getBadge(user.status)}>{user.status}</span>
              </td>
              <td>
                <button className='btn btn-danger'>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button className='btn btn-primary' onClick={e => updateStatus('Solved', user._id)}>
                  Solve
                </button>

              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  }

  return (
    <div>
      <h2>Issue Tracker</h2>
      {displayData()}
    </div>
  )
}

export default Track;