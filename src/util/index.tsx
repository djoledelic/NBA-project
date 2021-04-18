import CHILogo from './logos/CHI.png'
import CLELogo from './logos/CLE.png'
import DETLogo from './logos/DET.png'
import GSWLogo from './logos/GSW.png'
import HOULogo from './logos/HOU.png'
import INDLogo from './logos/IND.png'
import MEMLogo from './logos/MEM.png'
import MINLogo from './logos/MIN.png'
import NOLALogo from './logos/NOLA.png'
import OKCLogo from './logos/OKC.png'
import ORLLogo from './logos/ORL.png'
import SACLogo from './logos/SAC.png'
import TORLogo from './logos/TOR.png'
import WASLogo from './logos/WAS.png'

export type NbaTeam = {
    name: string
    projected: number
    odds: number[]
    logo: string
    pick: number
    picked: boolean
} 

export const nbaTeams = [
    {
      name: "Minnesota",
      projected: 1,
      odds: [14, 13.4, 12.7, 12],
      logo: MINLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Houston",
      projected: 2,
      odds: [14, 13.4, 12.7, 12],
      logo: HOULogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Detroit",
      projected: 3,
      odds: [14, 13.4, 12.7, 12],
      logo: DETLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Cleveland",
      projected: 4,
      odds: [11.5, 11.4, 11.2, 11],
      logo: CLELogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Orlando",
      projected: 5,
      odds: [11.5, 11.4, 11.2, 11],
      logo: ORLLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Washington",
      projected: 6,
      odds: [9, 9.2, 9.4, 9.6],
      logo: WASLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Toronto",
      projected: 7,
      odds: [7.5, 7.8, 8.1, 8.5],
      logo: TORLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Chicago",
      projected: 8,
      odds: [6, 6.3, 6.7, 7.2],
      logo: CHILogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Oklahoma",
      projected: 9,
      odds: [4.5, 4.8, 5.2, 5.7],
      logo: OKCLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "New Orleans",
      projected: 10,
      odds: [3, 3.3, 3.6, 4],
      logo: NOLALogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Sacramento",
      projected: 11,
      odds: [2, 2.2, 2.4, 2.8],
      logo: SACLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Indiana",
      projected: 12,
      odds: [1.5, 1.7, 1.9, 2.1],
      logo: INDLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Golden State",
      projected: 13,
      odds: [1, 1.1, 1.2, 1.4],
      logo: GSWLogo,
      pick: 0,
      picked: false,
    },
    {
      name: "Memphis",
      projected: 14,
      odds: [0.5, 0.6, 0.6, 0.7],
      logo: MEMLogo,
      pick: 0,
      picked: false,
    },
  ];