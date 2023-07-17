import React from "react"

const SquadPage=()=>{

return(


<div className="overflow-x-auto">

  <table className="table table-xs">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Pos.</th> 
        <th>Name</th> 
        <th></th> 
        <th></th> 
        <th>Overall</th> 
        <th>Age</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>GK</td> 
        <td>Aaron Ramsdale</td> 
        <td></td> 
        <td></td> 
        <td>83</td> 
        <td>24</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>CB</td> 
        <td>William Saliba</td> 
        <td></td> 
        <td></td> 
        <td>85</td> 
        <td>21</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>LB</td> 
        <td>Kieran Tierney</td> 
        <td></td> 
        <td></td> 
        <td>82</td> 
        <td>25</td>
      </tr>
      </tbody> 
    </table>
</div>
)
}

export default SquadPage
