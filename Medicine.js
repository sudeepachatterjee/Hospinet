export default function Medicine () {
        const data = [
          { Medicines: 'Paracetamol', Expiry: '25-Jun-2025' },
          { Medicines: 'Montair Lc', Expiry: '1-Aug-2023' }
        ];
      
    return(
        <>
             <table>
      <thead>
        <tr>
          <th>Medicines</th>  &nbsp; &nbsp; &nbsp; &nbsp;
          <th>Expiry</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.Medicines}</td> &nbsp; &nbsp; &nbsp; &nbsp;
            <td>{person.Expiry}</td>
          </tr>
        ))}
      </tbody>
    </table>

        </>
    )
}