import { useNavigate } from 'react-router'

import {
  Box,
  Card,
  Flex,
  GoBackButton,
  Grid,
  Image,
  Stack,
  Text,
  colorWithOpacity
} from '@lifeforge/ui'

import Cube from './Cube'

const sections: Array<{
  name: React.ReactElement | string
  subsections: Array<{
    name: React.ReactElement | string
    subsubsections: Array<{
      name: React.ReactElement | string
      desc?: React.ReactElement | string
      algs: Array<{
        alg: string[]
        warn?: number[]
        pattern: string
      }>
    }>
  }>
}> = [
  {
    name: 'BASIC F2L',
    subsections: [
      {
        name: '1A. Both pieces are on top.',
        subsubsections: [
          {
            name: (
              <>
                White sticker facing{' '}
                <Text as="span" color="primary">
                  Up
                </Text>
              </>
            ),
            algs: [
              {
                alg: ["U2 (R U R') U (R U' R')", "y F R U2 R' F'"],
                pattern: '--grr-rr- r---gg-gg ---r----w'
              },
              {
                alg: ["y U2 (L' U' L) U' (L' U L)", "F' L' U2 L F"],
                pattern: '--grr-rr- r---gg-gg -g------w'
              },
              {
                alg: ["U (R U2 R') U (R U' R')"],
                pattern: '--grr-rr- r---gg-gg -r------w'
              },
              {
                alg: ["y U' (L' U2 L) U' (L' U L)"],
                pattern: '--grr-rr- r---gg-gg ---g----w'
              },
              {
                alg: [
                  "U (R U' R') U' (R U' R' U R U' R')",
                  "U (F R' F' R) U (R U R')",
                  "U2 (L F' L' F) (R U R')",
                  "y U L' U' (L2 F' L' F) (L' U L)",
                  "y F' (U' L' U L) F (L' U L)",
                  "y' U2 R U' R' U' S R' S'"
                ],
                warn: [2, 5],
                pattern: '-ggrr-rr- r---gg-gg -------rw'
              },
              {
                alg: [
                  "y U' (L' U L) U (L' U L U' L' U L)",
                  "y U' (F' L F L') U' (L' U' L)",
                  "y U2 (R F' R' F) (L' U' L)",
                  "U' R U (R2' F R F') (R U' R')",
                  "F (U R U' R') F' (R U' R')",
                  "y2 U2 L' U L U S' L S"
                ],
                warn: [2, 5],
                pattern: '--grr-rr- rr--gg-gg -----g--w'
              },
              {
                alg: ["(R U2 R') U' (R U R')"],
                pattern: '--grr-rr- rg--gg-gg -----r--w'
              },
              {
                alg: ["y (L' U2 L) U (L' U' L)"],
                pattern: '-rgrr-rr- r---gg-gg -------gw'
              }
            ]
          },
          {
            name: (
              <>
                White sticker facing{' '}
                <Text as="span" color="primary">
                  Side / Front
                </Text>
              </>
            ),
            desc: (
              <>
                Stickers on the U face are{' '}
                <Text as="span" color="primary">
                  different
                </Text>
              </>
            ),
            algs: [
              {
                alg: ["(R U R')"],
                pattern: '--rrr-rr- w---gg-gg -r------g'
              },
              {
                alg: ["y (L' U' L)"],
                pattern: '--wrr-rr- g---gg-gg ---g----r'
              },
              {
                alg: [
                  "U' (R U R') U (R U R')",
                  "U2 (R U' R') U' (R U R')",
                  "R' U R2 U R'"
                ],
                warn: [2],
                pattern: '--rrr-rr- w---gg-gg ---r----g'
              },
              {
                alg: [
                  "y U (L' U' L) U' (L' U' L)",
                  "y U2 (L' U L) U (L' U' L)",
                  "y L U' L2' U' L"
                ],
                warn: [2],
                pattern: '--wrr-rr- g---gg-gg -g------r'
              },
              {
                alg: [
                  "R' U2 R2 U R2' U R",
                  "(R U' R') U (R U' R') U2 (R U' R')",
                  "R' U2 R2 U R'",
                  "y U L' U2 L U' y' R U R'"
                ],
                warn: [2],
                pattern: '-grrr-rr- w---gg-gg -------rg'
              },
              {
                alg: [
                  "y L U2 L2' U' L2 U' L'",
                  "y (L' U L) U' (L' U L) U2 (L' U L)",
                  "y L U2 L2' U' L",
                  "U' (R U2 R') U y (L' U' L)"
                ],
                warn: [2],
                pattern: '--wrr-rr- gr--gg-gg -----g--r'
              },
              {
                alg: ["U' (R U' R') U (R U R')"],
                pattern: '--rrr-rr- wg--gg-gg -----r--g'
              },
              {
                alg: ["y U (L' U L) U' (L' U' L)"],
                pattern: '-rwrr-rr- g---gg-gg -------gr'
              }
            ]
          },
          {
            name: (
              <>
                White sticker facing{' '}
                <Text as="span" color="primary">
                  Side / Front
                </Text>
              </>
            ),
            desc: (
              <>
                Stickers on the U face are{' '}
                <Text as="span" color="primary">
                  same
                </Text>
              </>
            ),
            algs: [
              {
                alg: ["y U' (L' U L)"],
                pattern: '-rrrr-rr- w---gg-gg -------gg'
              },
              {
                alg: ["U (R U' R')"],
                pattern: '--wrr-rr- gg--gg-gg -----r--r'
              },
              {
                alg: ["y U (L' U2 L) U2 (L' U L)", "r' U2 R2 U R2' U r"],
                pattern: '--rrr-rr- w---gg-gg -g------g'
              },
              {
                alg: ["U' (R U2 R') U2 (R U' R')", "y l U2 L2' U' L2 U' l'"],
                pattern: '--wrr-rr- g---gg-gg ---r----r'
              },
              {
                alg: ["U' (R U R') U2 (R U' R')", "y U l' U L U' L' U' l"],
                pattern: '--wrr-rr- g---gg-gg -r------r'
              },
              {
                alg: ["y U (L' U' L) U2 (L' U L)", "U' r U' R' U R U r'"],
                pattern: '--rrr-rr- w---gg-gg ---g----g'
              },
              {
                alg: [
                  "M U (L F' L') U' M'",
                  "U' (R' U R) U' (R U R')",
                  "y (L' U L) y' U2 (R U R')",
                  "y' (R2' F R F' R) U2 (R' U R)",
                  "y2 (f' L f) U2 (L U L')"
                ],
                warn: [1],
                pattern: '-gwrr-rr- g---gg-gg -------rr'
              },
              {
                alg: [
                  "y M U' (R' F R) U M'",
                  "y U (L U' L') U (L' U' L)",
                  "(R U' R') y U2 (L' U' L)",
                  "y2 (L2 F' L' F L') U2 (L U' L')",
                  "y' (f R' f') U2 R' U' R"
                ],
                warn: [1],
                pattern: '--rrr-rr- wr--gg-gg -----g--g'
              }
            ]
          }
        ]
      },
      {
        name: '1B. 1 piece is in the correct slot.',
        subsubsections: [
          {
            name: 'Edge in the slot',
            algs: [
              {
                alg: [
                  "U (R U R') U2 (R U R')",
                  "U' (R U2 R') U (R U R')",
                  "y U (L' U L) U2 (L' U L)"
                ],
                pattern: '--rrrrrr- w--ggg-gg --------g'
              },
              {
                alg: [
                  "y U' (L' U' L) U2 (L' U' L)",
                  "y U (L' U2 L) U' (L' U' L)",
                  "U' R U' R' U2 R U' R'"
                ],
                pattern: '--wrrrrr- g--ggg-gg --------r'
              },
              {
                alg: [
                  "U (F' U' F) U' (R U R')",
                  "y U2 (L' U' L) (F' L F L')",
                  "y U' M' (U' L' U l) (L' U L)",
                  "y U' (L U F' L' F) (L' U L)",
                  "y' U2 (R' U' R) y U (R U' R')",
                  "y' U2 R' U' M U' R U M'",
                  "y2 U (f' L' f) U' (L U L')"
                ],
                warn: [3],
                pattern: '--rrrgrr- w--rgg-gg --------g'
              },
              {
                alg: [
                  "y U' (F U F') U (L' U' L)",
                  "U2 (R U R') (F R' F' R)",
                  "U M' (U R U' r') (R U' R')",
                  "U (R' U' F R F') (R U' R')",
                  "y2 U2 (L U L') y' U' (L' U L)",
                  "y2 U2 L U M U L' U' M'",
                  "y' U' (f R f') U (R' U' R)"
                ],
                warn: [3],
                pattern: '--wrrgrr- g--rgg-gg --------r'
              },
              {
                alg: ["(U R U' R')3"],
                pattern: '--grrrrr- r--ggg-gg --------w'
              },
              {
                alg: [
                  "U' (R' F R F') (R U' R')",
                  "(R U' R') (F' U2 F)",
                  "y' R' U R' F R F' R",
                  "y' U' (R' U2 R) (f R f')"
                ],
                pattern: '--grrgrr- r--rgg-gg --------w'
              }
            ]
          },
          {
            name: 'Corner in the slot',
            algs: [
              {
                alg: [
                  "(R U R') U' (R U R')",
                  "y M' (U' L' U L) (U' L' U l)",
                  "y (L F' L' F)2"
                ],
                pattern: '---rr-rrg -g--ggwgg -----r---'
              },
              {
                alg: [
                  "y (L' U' L) U (L' U' L)",
                  "M' (U R U' R') (U R U' r')",
                  "(R' F R F')2"
                ],
                pattern: '-r-rr-rrw ----ggrgg -------g-'
              },
              {
                alg: ["(R U' R') U (R U' R')"],
                pattern: '---rr-rrw -g--ggrgg -----r---'
              },
              {
                alg: ["y (L' U L) U' (L' U L)"],
                pattern: '-r-rr-rrg ----ggwgg -------g-'
              },
              {
                alg: [
                  "U' (R' F R F') (R U R')",
                  "(R' F' R) (U R U' R') F",
                  "U' F' (R U R' U') (R' F R)",
                  "y U' (L' U L) (F' L F L')",
                  "y2 U' M U L U' M' U L'",
                  "y' U' R' U M U' R U M'"
                ],
                pattern: '---rr-rrr -g--ggggg -----r---'
              },
              {
                alg: [
                  "y U (L F' L' F) (L' U' L)",
                  "y (L F L') (U' L' U L) F'",
                  "y U F (L' U' L U) (L F' L')",
                  "U (R U' R') (F R' F' R)",
                  "y' U M U' R' U M' U' R",
                  "y2 U L U' M U L' U' M'"
                ],
                pattern: '-r-rr-rrr ----ggggg -------g-'
              }
            ]
          }
        ]
      },
      {
        name: '1C. Both pieces are in the correct slot.',
        subsubsections: [
          {
            name: '',
            algs: [
              {
                alg: [
                  "(R U' R') U (R U2 R' U R U' R')",
                  "y' (L' U L) U (L' U' L U2' L' U L)"
                ],
                pattern: '----rr-rg ---gg-wg- ---------'
              },
              {
                alg: [
                  "y' (L' U L) U' (L' U2' L U' L' U L)",
                  "(R U' R') U' (R U R' U2 R U' R')"
                ],
                pattern: '----rr-rw ---gg-rg- ---------'
              },
              {
                alg: [
                  "(R U' R') (F' L' U2 L F)",
                  "y (F R U2' R' F') (L' U' L)",
                  "y2 L2 F U F' U' L' U L'",
                  "y' R' U R' U' F' U F R2"
                ],
                pattern: '----rg-rg ---rg-wg- ---------'
              },
              {
                alg: [
                  "y (L' U L) (F R U2' R' F')",
                  "(F' L' U2 L F) (R U R')",
                  "y' R2' F' U' F U R U' R",
                  "y2 L U' L U F U' F' L2'"
                ],
                pattern: '----rg-rw ---rg-rg- ---------'
              },
              {
                alg: [
                  "R2' U2' F R2 F' U2' R' U R'",
                  "y L2 U2 F' L2' F U2 L U' L",
                  "y' (f R' f') U (R' U2' R) U (R' U2' R)",
                  "y2 (f' L f) U' (L U2 L') U' (L U2 L')"
                ],
                pattern: '----rg-rr ---rg-gg- ---------'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'ADVANCED F2L',
    subsections: [
      {
        name: '2A. Edge is in the wrong slot.',
        subsubsections: [
          {
            name: (
              <>
                White sticker facing{' '}
                <Text as="span" color="primary">
                  Up
                </Text>
              </>
            ),
            algs: [
              {
                alg: ["U' R' U R2 U' R'"],
                pattern: '--g-r--r- r---gg-g- --------w'
              },
              {
                alg: ["y U L U' L2' U L"],
                pattern: '--grr--r- r---g--g- --------w'
              },
              {
                alg: [
                  "U2 (R' U R) U' (S R S')",
                  "y R' F R2 U' R' U2 F'",
                  "y2 U2 (L F' L' F) (L U L')"
                ],
                pattern: '--g-r--r- r---gr-g- --------w'
              },
              {
                alg: [
                  "y U2 (L U' L') U (S' L' S)",
                  "L F' L2' U L U2' F",
                  "y' U2 (R' F R F') (R' U' R)"
                ],
                pattern: '--ggr--r- r---g--g- --------w'
              },
              {
                alg: [
                  "U2 L2' u L2 u' L2'",
                  "y U2 R2 u' R2' u R2",
                  "y' U2 L2' u' L2 u L2'",
                  "y2 U2 R2 u R2' u' R2"
                ],
                pattern: '--g-or-o- r--gb--b- --------w'
              },
              {
                alg: [
                  "L F' U F L'",
                  "y R' F U' F' R",
                  "y' (L' u' L) U' (L' u L)",
                  "y2 (R u R') U (R u' R')"
                ],
                pattern: '--g-og-o- r--rb--b- --------w'
              }
            ]
          },
          {
            name: (
              <>
                White sticker facing{' '}
                <Text as="span" color="primary">
                  Side / Front
                </Text>
              </>
            ),
            algs: [
              {
                alg: ["R' U' R2 U R'"],
                pattern: '--r-r--r- w---gg-g- --------g'
              },
              {
                alg: ["y L U L2' U' L"],
                pattern: '--wrr--r- g---g--g- --------r'
              },
              {
                alg: [
                  "F D R D' F'",
                  "y R (F U F') R'",
                  "y2 F (L U L') F'",
                  "y' R u R u' R'"
                ],
                pattern: '--r-r--r- w---gr-g- --------g'
              },
              {
                alg: [
                  "y F' D' L' D F",
                  "L' (F' U' F) L",
                  "y' F' (R' U' R) F",
                  "y2 L' u' L' u L"
                ],
                pattern: '--wgr--r- g---g--g- --------r'
              },
              {
                alg: ["U' (L' U' L) (R U' R')", "y U2 L' U' L2 U L2' U' L"],
                pattern: '--rrr--r- w---g--g- --------g'
              },
              {
                alg: ["U (R U R') (L' U L)", "y' U2' R U R2' U' R2 U R'"],
                pattern: '--w-r--r- g---gg-g- --------r'
              },
              {
                alg: [
                  "(F U2 F') (R U R')",
                  "y L U2 L' F U F'",
                  "y' R U2 R' f R f'"
                ],
                pattern: '--rgr--r- w---g--g- --------g'
              },
              {
                alg: [
                  "y (F' U2 F) (L' U' L)",
                  "R' U2 R F' U' F",
                  "y2 L' U2 L f' L' f"
                ],
                pattern: '--w-r--r- g---gr-g- --------r'
              },
              {
                alg: [
                  "U (R U R') (L U L')",
                  "U' (R U2 R') U' (L U L')",
                  "y U (L' U L) (R' U R)"
                ],
                pattern: '--r-or-o- w--gb--b- --------g'
              },
              {
                alg: [
                  "y U' (L' U' L) (R' U' R)",
                  "y U (L' U2 L) U (R' U' R)",
                  "U' (R U' R') (L U' L')"
                ],
                pattern: '--w-or-o- g--gb--b- --------r'
              },
              {
                alg: [
                  "U2 F' (L U L') F",
                  "y U2 L' (B U B') L",
                  "y' U2 R' (F U F') R",
                  "y2 f' U L U' f"
                ],
                pattern: '--r-og-o- w--rb--b- --------g'
              },
              {
                alg: [
                  "y U2' F (R' U' R) F'",
                  "U2' R (B' U' B) R'",
                  "y2 U2' L (F' U' F) L'",
                  "y' f U' R' U f'"
                ],
                pattern: '--w-og-o- g--rb--b- --------r'
              }
            ]
          }
        ]
      },
      {
        name: '2B. Corner is in the wrong slot.',
        subsubsections: [
          {
            name: 'Corner In The Right Slot',
            algs: [
              {
                alg: ["U (R U' R') (L' U L)"],
                pattern: '-r--g--gr ----o-go- -------g-'
              },
              {
                alg: ["y (L' U2 L) U' (L U L')", "y U2 (L' U L) U' (L U2 L')"],
                pattern: '-g--g--gr ----o-go- -------r-'
              },
              {
                alg: ["U2 (R U' R') U (L' U' L)", "y (F' L F L') U' (L U2 L')"],
                pattern: '-r--g--gw ----o-ro- -------g-'
              },
              {
                alg: ["y U' L' U' L2 U2 L'"],
                pattern: '-g--g--gw ----o-ro- -------r-'
              },
              {
                alg: ["(R U R') U' (L' U L)", "y (S' L S)"],
                pattern: '-r--g--gg ----o-wo- -------g-'
              },
              {
                alg: [
                  "U' (R U R') (F U F')",
                  "y U (L' U L) U (L U L')",
                  "y U' (F U F') (L U L')"
                ],
                pattern: '-g--g--gg ----o-wo- -------r-'
              }
            ]
          },
          {
            name: 'Corner In The Left Slot',
            algs: [
              {
                alg: ["y U' (L' U L) (R U' R')"],
                pattern: '----b--br -g--r-gr- -----r---'
              },
              {
                alg: ["(R U2 R') U (R' U' R)", "U2 (R U' R') U (R' U2 R)"],
                pattern: '----b--br -r--r-gr- -----g---'
              },
              {
                alg: ["(F R' F' R) U (R' U2 R)", "y U2 (L' U L) U' (R U R')"],
                pattern: '----b--bg -g--r-wr- -----r---'
              },
              {
                alg: ["U R U R2' U2 R"],
                pattern: '----b--bg -r--r-wr- -----g---'
              },
              {
                alg: ["(S R' S')", "y (L' U' L) U (R U' R')"],
                pattern: '----b--bw -g--r-rr- -----r---'
              },
              {
                alg: [
                  "U (F U' F') (R' U' R)",
                  "U' (R U' R') U' (R' U R)",
                  "y U (L' U' L) (F' U' F)"
                ],
                pattern: '----b--bw -r--r-rr- -----g---'
              }
            ]
          },
          {
            name: 'Corner In The Opposite Slot',
            algs: [
              {
                alg: ["U' (F' U F) (L U2 L')", "y U' (L' U L) U' (f R' f')"],
                pattern: '----o--or -g--b-gb- -----r---'
              },
              {
                alg: ["U (R U' R') U (f' L f)", "y U (F U' F') (R' U2 R)"],
                pattern: '-r--o--or ----b-gb- -------g-'
              },
              {
                alg: ["(R U' R') (L U2 L')", "y (L' U' L) (f R' f')"],
                pattern: '----o--ow -g--b-rb- -----r---'
              },
              {
                alg: ["(R U R') (f' L f)", "y (L' U L) (R' U2 R)"],
                pattern: '-r--o--og ----b-wb- -------g-'
              },
              {
                alg: ["(R U' R') U (L U L')", "y (L F' L' F) (R' U2 R)"],
                pattern: '----o--og -g--b-wb- -----r---'
              },
              {
                alg: ["(R' F R F') (L U2 L')", "y (L' U' L) U' (R' U' R)"],
                pattern: '-r--o--ow ----b-rb- -------g-'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'EXPERT F2L',
    subsections: [
      {
        name: 'Both pieces are in a slot (only the easy cases).',
        subsubsections: [
          {
            name: 'Corner Is Solved',
            algs: [
              {
                alg: ["R2 U' R2' U R2", "y2 L2' U' L2 U L2'", "y F' R' F2 R F"],
                pattern: '----r--rr ----gggg- ---------'
              },
              {
                alg: [
                  "f' R' U R f",
                  "y R' u' R u R",
                  "y' L' u' L u L",
                  "y2 f' D' L D f"
                ],
                pattern: '----r--rr ----grgg- ---------'
              },
              {
                alg: [
                  "y L2' U L2 U' L2'",
                  "y' R2 U R2' U' R2",
                  "F L F2' L' F'"
                ],
                pattern: '---rr--rr ----g-gg- ---------'
              },
              {
                alg: [
                  "y f L U' L' f'",
                  "L u L' u' L'",
                  "y2 R u R' u' R'",
                  "y' f D R' D' f'"
                ],
                pattern: '---gr--rr ----g-gg- ---------'
              },
              {
                alg: [
                  "L2' u' L2 u L2'",
                  "y' R2 u R2' u' R2",
                  "y L2' u L2 u' L2'",
                  "y2 R2 u' R2' u R2"
                ],
                pattern: '---gb--b- ----r--rr ---------'
              },
              {
                alg: [
                  "(L' u' L) U (L' u L)",
                  "y' (R u R') U' (R u' R')",
                  "y (L u L') U' (L u' L')",
                  "y2 (R' u' R) U (R' u R)"
                ],
                pattern: '---rb--b- ----r--rr ---------'
              }
            ]
          },
          {
            name: 'Pair In The Wrong Slot',
            algs: [
              {
                alg: [
                  "R' F R2 U' R2' F' R",
                  "L F' L2' U' L2 F L'",
                  "y (f' L' f) U' (L' U L)",
                  "y' (R U R') U' (f R' f')",
                  "y2 (f R f') (L U2 L')"
                ],
                pattern: '---gr-gr- ----g--g- ---------'
              },
              {
                alg: [
                  "y L F' L2' U L2 F L'",
                  "y R' F R2 U R2' F' R",
                  "(f R f') U (R U' R')",
                  "y2 (L' U' L) U (f' L f)",
                  "y' (f' L' f) (R' U2' R)"
                ],
                pattern: '----r--r- ----gr-gr ---------'
              },
              {
                alg: ["R (L U2 L') R'", "y L' (R' U2 R) L"],
                pattern: '----or-or ---gb-gb- ---------'
              }
            ]
          },
          {
            name: 'Flipped Edge & Corner In Adjacent Slot',
            algs: [
              {
                alg: [
                  "L F2' L' F U' F",
                  "(L F' L' U' F) U' (R U R')",
                  "y (L U' F' L' F) (L' U L)"
                ],
                pattern: '----rgwr- ---rg--g- ---------'
              },
              {
                alg: [
                  "y R' F2 R F' U F'",
                  "y (R' F R U F') U (L' U' L)",
                  "(R' U F R F') (R U' R')"
                ],
                pattern: '----rg-r- ---rg--gw ---------'
              },
              {
                alg: ["(R' F R U' F') (R U' R')", "y (L' U' L) U (S' L' S)"],
                pattern: '----rgrr- ---rg--g- ---------'
              },
              {
                alg: ["y (L F' L' U F) (L' U L)", "(R U R') U' (S R S')"],
                pattern: '----rg-r- ---rg--gg ---------'
              },
              {
                alg: [
                  "(L' U L) (M' U R U' r') (R U' R')",
                  "y (L U F' L' F) U2 (L' U' L)",
                  "y (L U L') (F U F') U' (L' U L)"
                ],
                pattern: '----rggr- ---rg--g- ---------'
              },
              {
                alg: [
                  "y (R U' R') (M' U' L' U l) (L' U L)",
                  "(R' U' F R F') U2 (R U R')",
                  "(R' U' R) (F' U' F) U (R U' R')"
                ],
                pattern: '----rg-r- ---rg--gr ---------'
              }
            ]
          },
          {
            name: 'Other Easy Cases',
            algs: [
              {
                alg: [
                  "(R' F R U' F') U (R U' R')",
                  "R U' R2' u' R' u R",
                  "y2 L U' L2' u' L' u L"
                ],
                pattern: '---gr--rw ----g-rg- ---------'
              },
              {
                alg: [
                  "y (L F' L' U F) U' (L' U L)",
                  "y L' U L2 u L u' L'",
                  "y' R' U R2 u R u' R'"
                ],
                pattern: '----r--rg ----grwg- ---------'
              }
            ]
          }
        ]
      }
    ]
  }
]

function CFOPF2L(): React.ReactElement {
  const navigate = useNavigate()

  return (
    <>
      <Stack as="header" gap="xs">
        <GoBackButton
          onClick={() => {
            navigate(-1)
          }}
        />
        <Flex align="center" as="h1" gap="sm">
          {' '}
          <Image
            alt="F2L"
            fallback={null}
            fit="contain"
            height="4em"
            src="/assets/apps/CFOPAlgorithms/landing-f2l.webp"
            width="4em"
          />
          <Text size={{ base: '2xl', sm: '3xl' }} weight="semibold">
            First Two Layers
          </Text>
        </Flex>
      </Stack>
      {sections.map((section, i) => (
        <Stack key={`section-${i + 1}`} as="section" gap="sm" my="xl">
          <Text
            align="center"
            as="p"
            color="primary"
            size="lg"
            tracking="wider"
            weight="semibold"
          >
            SECTION {i + 1}
          </Text>
          <Text
            align="center"
            as="h2"
            size="4xl"
            tracking="widest"
            weight="semibold"
          >
            {section.name}
          </Text>
          {section.subsections.map((subsection, j) => (
            <Stack key={`subsection-${j + 1}`} gap="xl">
              <Text
                align="center"
                as="h3"
                pt="xl"
                size="2xl"
                tracking="wider"
                weight="semibold"
              >
                {subsection.name}
              </Text>
              {subsection.subsubsections.map((subsubsection, k) => (
                <Box key={`subsubsection-${k + 1}`}>
                  {subsubsection.name !== '' && (
                    <Text
                      as="h4"
                      pt="md"
                      size="2xl"
                      tracking="wider"
                      weight="semibold"
                    >
                      {subsubsection.name}
                    </Text>
                  )}
                  <Text as="p" color="muted" mt="sm" size="lg">
                    {subsubsection.desc}
                  </Text>
                  <Grid as="ul" gap="sm" mt="md" templateCols={{ sm: 2 }}>
                    {subsubsection.algs.map(({ alg, pattern, warn }, i) => (
                      <Card
                        key={i}
                        align="center"
                        as="li"
                        direction="row"
                        gap="lg"
                      >
                        <Box
                          shadow
                          bg={{
                            base: 'bg-100',
                            dark: colorWithOpacity('bg-800', '50%')
                          }}
                          p="xs"
                          pb="sm"
                          r="md"
                        >
                          <Cube pattern={pattern} />
                        </Box>
                        <Stack>
                          {alg.map((a, j) => (
                            <Text
                              key={a}
                              color={warn?.includes(j) ? 'red-400' : undefined}
                              size="lg"
                              weight="medium"
                            >
                              {a}
                            </Text>
                          ))}
                        </Stack>
                      </Card>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </>
  )
}

export default CFOPF2L
