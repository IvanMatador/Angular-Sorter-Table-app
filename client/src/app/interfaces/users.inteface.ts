export interface User {
  idReport: number,
  idSubject: number,
  reportState: string,
  termType: string,
  publicationType: string,
  reportGroup: string,
  outputNumber: string,
  outputDate: {
    date: string,
    timezone_type: number,
    timezone: string
  },
  bSentToNSSMC: true,
  bDisclosure: true,
  dateFill: {
    date: string,
    timezone_type: number,
    timezone: string
  },
  reportFormat: string
} 
