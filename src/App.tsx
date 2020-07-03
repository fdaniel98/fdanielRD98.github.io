import React from 'react';
import FormBuilder from 'formbuilder'
import axios from 'axios'
import './App.css';

const headers = {
  'X-Authorization': 'XiS9cuDMlRP0YtMsXPNepZFti5jqeoQdm0LbnZh8IMvZmF118LqCNSSj6CDVnYPv'
}

const formUrl = `/formularies/874`

const localUrl = 'http://127.0.0.1:8000/api'
const dev = 'https://des-psplbk.serviciosrd.gob.do/api'

const testFnc = async (fields: any, service: string, institution: string, name: string, description: string, version: string, extra: Array<any>) => {
  const data = {
    fields: [JSON.stringify(fields[0])],
    institution_id: institution,
    service_id: service,
    name: 'acto de venta (desde nuevo form builder)',
    description: 'acto de venta',
    extra: JSON.stringify({
      differents: extra
    })
  }

  //const dataReturn = await axios.post('https://des-psplbk.serviciosrd.gob.do/api/formularies', data, { headers: headers })

  //console.log('data del retorno...', dataReturn);

}

const App: React.FC = () => {
  return (
    <div className="App">
      <FormBuilder isSoftExpertForm
        apiURL={dev}
        institutionApi="institutions/all"
        serviceApi="/services/formbuilder/index"
        fields={[]}
        sendForm={testFnc}
        headers={headers}
        formUrl={formUrl}
      />
    </div>
  );
}

export default App;
