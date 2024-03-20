const instance = {
    instance: {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/journal-instance/1207?namespace=static-10.2.5_52554-us'
      },
      name: "Amirdrassil, the Dream's Hope",
      id: 1207
    },
    modes: [
      { difficulty: [Object], status: [Object], progress: [Object] },
      { difficulty: [Object], status: [Object], progress: [Object] },
      { difficulty: [Object], status: [Object], progress: [Object] }
    ]
  }
  dif { type: 'LFR', name: 'Raid Finder' }
  status { type: 'COMPLETE', name: 'Complete' }
  prog {
    completed_count: 9,
    total_count: 9,
    encounters: [
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1704997013000
      },
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1704997347000
      },
      {
        encounter: [Object],
        completed_count: 6,
        last_kill_timestamp: 1703920277000
      },
      {
        encounter: [Object],
        completed_count: 5,
        last_kill_timestamp: 1703919338000
      },
      {
        encounter: [Object],
        completed_count: 6,
        last_kill_timestamp: 1703920788000
      },
      {
        encounter: [Object],
        completed_count: 5,
        last_kill_timestamp: 1703919845000
      },
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1704997787000
      },
      {
        encounter: [Object],
        completed_count: 12,
        last_kill_timestamp: 1709065290000
      },
      {
        encounter: [Object],
        completed_count: 12,
        last_kill_timestamp: 1709065781000
      }
    ]
  }
  dif { type: 'NORMAL', name: 'Normal' }
  status { type: 'COMPLETE', name: 'Complete' }
  prog {
    completed_count: 9,
    total_count: 9,
    encounters: [
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704503350000
      },
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704503958000
      },
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704506667000
      },
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704510671000
      },
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704507419000
      },
      {
        encounter: [Object],
        completed_count: 4,
        last_kill_timestamp: 1704512186000
      },
      {
        encounter: [Object],
        completed_count: 5,
        last_kill_timestamp: 1704508111000
      },
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1707239649000
      },
      {
        encounter: [Object],
        completed_count: 17,
        last_kill_timestamp: 1709059705000
      }
    ]
  }
  dif { type: 'HEROIC', name: 'Heroic' }
  status { type: 'COMPLETE', name: 'Complete' }
  prog {
    completed_count: 9,
    total_count: 9,
    encounters: [
      {
        encounter: [Object],
        completed_count: 9,
        last_kill_timestamp: 1704680998000
      },
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1704681417000
      },
      {
        encounter: [Object],
        completed_count: 8,
        last_kill_timestamp: 1704682176000
      },
      {
        encounter: [Object],
        completed_count: 7,
        last_kill_timestamp: 1704685100000
      },
      {
        encounter: [Object],
        completed_count: 6,
        last_kill_timestamp: 1703806625000
      },
      {
        encounter: [Object],
        completed_count: 5,
        last_kill_timestamp: 1703807993000
      },
      {
        encounter: [Object],
        completed_count: 3,
        last_kill_timestamp: 1703653801000
      },
      {
        encounter: [Object],
        completed_count: 2,
        last_kill_timestamp: 1703042785000
      },
      {
        encounter: [Object],
        completed_count: 11,
        last_kill_timestamp: 1708493454000
      }
    ]
  }



  //SAMPLE ENCOUNTER OBJECT
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/journal-encounter/2522?namespace=static-10.2.5_52554-us'
    },
    name: 'Kazzara, the Hellforged',
    id: 2522
  }