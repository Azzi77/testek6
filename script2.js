import http, { expectedStatuses } from 'k6/http';
import { sleep } from 'k6';
import { hmac } from 'k6/crypto';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export const options = {
  thresholds:{
    checks:['rate == 1.00'],
  },
  vus: 1,
  duration: '10s',
};


const jobFailed= {
  "Type": "job.faulted",
  "EventId": "ec5afc6f07254520b8a6d31036b96975",
  "Timestamp": "2024-04-09:14:26.2879878Z",
  "Job": {
    "Id": 148671,
    "Key": "9cc6c2e4-237d-42f6-8cb8-43010652fb22",
    "State": "Faulted",
    "StartTime": "2018-11-26T14:14:25.637Z",
    "EndTime": "2018-11-26T14:14:26.2529616Z",
    "Info": "This workflow always failsresultLocation)",
    "OutputArguments": {},
    "Robot": {
      "Id": 4778,
      "Name": "local",
      "MachineName": "PC-DOC"
    },
    "Release": {
      "Id": 358,
      "Key": "8fad9c36-237b-49a6-a939-47963fb8099a",
      "ProcessKey": "FailingJob"
    }
  },
  "TenantId": 777,
  "OrganizationUnitId": 1
}

export default function() {
  describe("basic flow", () =>{
    
    const url = ""
    

    const payload = JSON.stringify(jobFailed)
    

    const secret = "teste"

    const signature = hmac('sha256', secret, payload, "base64")

    const params = {
      headers:{
        "Content-Type": "application/json",
        "X-UiPath-Signature": signature,
      }
    }
    
    const res = http.post(url, payload, params)

  })
}