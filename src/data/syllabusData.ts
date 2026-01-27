export interface SubTopic {
  name: string;
}

export interface Topic {
  name: string;
  subtopics: SubTopic[];
}

export interface Subject {
  name: string;
  topics: Topic[];
}

export interface Paper {
  name: string;
  subjects: Subject[];
}


export const syllabusData: Paper[] = [
  {
    name: "GS1",
    subjects: [
      {
        name: "Indian Culture",
        topics: [
          {
            name: "Indian Culture Overview",
            subtopics: [
              { name: "Salient aspects of Art Forms" },
              { name: "Salient aspects of Literature" },
              { name: "Salient aspects of Architecture" },
              { name: "Ancient India Cultural Developments" },
              { name: "Medieval India Cultural Developments" },
              { name: "Modern India Cultural Developments" }
            ]
          }
        ]
      },
      {
        name: "History",
        topics: [
          {
            name: "Ancient India",
            subtopics: [
              { name: "Prehistoric Cultures in India" },
              { name: "Indus Valley Civilization" },
              { name: "Vedic Society and Culture" },
              { name: "Religious Movements (Buddhism & Jainism)" },
              { name: "Mauryan Empire" },
              { name: "Post-Mauryan Developments" },
              { name: "Gupta Age" },
              { name: "Post-Gupta Period" }
            ]
          },
          {
            name: "Medieval India",
            subtopics: [
              { name: "Early Medieval India" },
              { name: "Delhi Sultanate Administration" },
              { name: "Mughal Empire" },
              { name: "Administrative Systems" },
              { name: "Bhakti Movement" },
              { name: "Sufi Movement" },
              { name: "Regional Kingdoms" }
            ]
          },
          {
            name: "Modern India",
            subtopics: [
              { name: "Advent of Europeans" },
              { name: "British Expansion in India" },
              { name: "Economic Impact of British Rule" },
              { name: "Tribal & Peasant Movements" },
              { name: "Indian National Movement" },
              { name: "Gandhian Era" },
              { name: "Revolutionary Movements" },
              { name: "Post-Independence Consolidation" }
            ]
          },
          {
            name: "World History",
            subtopics: [
              { name: "Renaissance" },
              { name: "Industrial Revolution" },
              { name: "American Revolution" },
              { name: "French Revolution" },
              { name: "Russian Revolution" },
              { name: "World Wars" },
              { name: "Colonialism" },
              { name: "Decolonization" },
              { name: "Political Philosophies (Communism, Capitalism, Socialism)" }
            ]
          }
        ]
      },
      {
        name: "Geography",
        topics: [
          {
            name: "Physical Geography",
            subtopics: [
              { name: "Geomorphology" },
              { name: "Climatology" },
              { name: "Oceanography" },
              { name: "Biogeography" }
            ]
          },
          {
            name: "Indian Geography",
            subtopics: [
              { name: "Physiographic Divisions" },
              { name: "River Systems" },
              { name: "Climate of India" },
              { name: "Soil Types" },
              { name: "Natural Vegetation" },
              { name: "Mineral Resources" },
              { name: "Water Resources" }
            ]
          },
          {
            name: "World Geography",
            subtopics: [
              { name: "Distribution of Natural Resources" },
              { name: "Primary Sector Industries" },
              { name: "Secondary Sector Industries" },
              { name: "Tertiary Sector Industries" }
            ]
          },
          {
            name: "Environmental Geography",
            subtopics: [
              { name: "Earthquakes" },
              { name: "Volcanoes" },
              { name: "Tsunamis" },
              { name: "Cyclones" },
              { name: "Climate Change Impacts" }
            ]
          }
        ]
      },
      {
        name: "Society",
        topics: [
          {
            name: "Indian Society",
            subtopics: [
              { name: "Salient Features of Indian Society" },
              { name: "Role of Women" },
              { name: "Population and Associated Issues" },
              { name: "Urbanization" },
              { name: "Social Empowerment" }
            ]
          },
          {
            name: "Globalization",
            subtopics: [
              { name: "Effects of Globalization on Indian Society" },
              { name: "Cultural Changes" },
              { name: "Economic Changes" },
              { name: "Social Challenges" }
            ]
          }
        ]
      }
    ]
  },
{
  name: "GS2",
  subjects: [
    {
      name: "Indian Constitution & Polity",
      topics: [
        {
          name: "Constitutional Framework",
          subtopics: [
            { name: "Historical Background" },
            { name: "Constitutional Features" },
            { name: "Amendment Procedures" },
            { name: "Basic Structure Doctrine" }
          ]
        },
        {
          name: "Functions of Government",
          subtopics: [
            { name: "Legislature" },
            { name: "Executive" },
            { name: "Judiciary" }
          ]
        },
        {
          name: "Federal Structure",
          subtopics: [
            { name: "Centre-State Relations" },
            { name: "Inter-State Relations" },
            { name: "Local Government" }
          ]
        }
      ]
    },
    {
      name: "Governance",
      topics: [
        {
          name: "Governance Issues",
          subtopics: [
            { name: "Transparency" },
            { name: "Accountability" },
            { name: "E-Governance" },
            { name: "Citizen Charters" }
          ]
        },
        {
          name: "Social Justice",
          subtopics: [
            { name: "Health" },
            { name: "Education" },
            { name: "Poverty" },
            { name: "Nutrition" }
          ]
        }
      ]
    },
    {
      name: "International Relations",
      topics: [
        {
          name: "India & World",
          subtopics: [
            { name: "Bilateral Relations" },
            { name: "Regional Groupings" },
            { name: "Global Institutions" },
            { name: "Indian Diaspora" }
          ]
        }
      ]
    }
  ]
},
{
  name: "GS3",
  subjects: [
    {
      name: "Economy",
      topics: [
        {
          name: "Indian Economy",
          subtopics: [
            { name: "Economic Planning" },
            { name: "Inclusive Growth" },
            { name: "Government Budgeting" },
            { name: "Infrastructure" }
          ]
        },
        {
          name: "Agriculture",
          subtopics: [
            { name: "Cropping Patterns" },
            { name: "Irrigation Systems" },
            { name: "Agricultural Marketing" },
            { name: "Food Security" }
          ]
        }
      ]
    },
    {
      name: "Science & Technology",
      topics: [
        {
          name: "Technology Developments",
          subtopics: [
            { name: "IT & Computers" },
            { name: "Space Technology" },
            { name: "Biotechnology" },
            { name: "Nanotechnology" }
          ]
        }
      ]
    },
    {
      name: "Environment & Disaster",
      topics: [
        {
          name: "Environment",
          subtopics: [
            { name: "Biodiversity Conservation" },
            { name: "Environmental Pollution" },
            { name: "Climate Change" },
            { name: "Environmental Impact Assessment" }
          ]
        },
        {
          name: "Disaster Management",
          subtopics: [
            { name: "Natural Disasters" },
            { name: "Disaster Preparedness" },
            { name: "Disaster Mitigation" }
          ]
        }
      ]
    },
    {
      name: "Internal Security",
      topics: [
        {
          name: "Security Challenges",
          subtopics: [
            { name: "Terrorism" },
            { name: "Cyber Security" },
            { name: "Border Management" },
            { name: "Money Laundering" }
          ]
        }
      ]
    }
  ]
},
{
  name: "GS4",
  subjects: [
    {
      name: "Ethics",
      topics: [
        {
          name: "Ethics & Human Interface",
          subtopics: [
            { name: "Essence of Ethics" },
            { name: "Determinants of Ethics" },
            { name: "Consequences of Ethics" }
          ]
        },
        {
          name: "Attitude",
          subtopics: [
            { name: "Structure of Attitude" },
            { name: "Moral Attitudes" },
            { name: "Political Attitudes" }
          ]
        },
        {
          name: "Emotional Intelligence",
          subtopics: [
            { name: "Concept of EI" },
            { name: "EI in Administration" }
          ]
        },
        {
          name: "Probity in Governance",
          subtopics: [
            { name: "Public Service Values" },
            { name: "Codes of Ethics" },
            { name: "Codes of Conduct" },
            { name: "RTI" }
          ]
        },
        {
          name: "Case Studies",
          subtopics: [
            { name: "Ethical Dilemmas" },
            { name: "Administrative Case Studies" }
          ]
        }
      ]
    }
  ]
}

];

// Mock API function
export const fetchSyllabus = (): Promise<Paper[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(syllabusData);
    }, 500);
  });
};
