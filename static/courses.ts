// Max 60
// Course Type 1 = Unlimited Course
// Course Type 2 = Timelimited Course

export const FestoCourse = [
  {
    type: 1,
    difficulty: 1,
    etime: 0,
    name: "TEST MAN",

    tune_list: [
      {
        music_list: [
          {
            id: 70000149,
            seq: 2,
            is_secret: false,
          },
        ],
      },
      {
        music_list: [
          {
            id: 70000149,
            seq: 2,
            is_secret: false,
          },
        ],
      },
      {
        music_list: [
          {
            id: 70000149,
            seq: 2,
            is_secret: true,
          },
        ],
      },
    ],

    clear: {
      type: 1,
      score: 5000,
      ex_option: {
        is_hard: false,
        hazard_type: 0,
      },
      reward_list: [],
    },
  },
];
