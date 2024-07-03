<script setup lang="ts">
import type { Resume } from "@/models/resume";

const data: Resume = {
    personalInfo: {
        name: "Henrique Vaz",
        birthDate: new Date("21/10/1991"),
        location: "Lisbon, Portugal",
        email: "henrique.vaz.91@gmail.com",
        socials: [
            {
                name: "LinkedIn",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
                link: "https://www.linkedin.com/in/henrique-vaz-7242a250"
            }
        ],
        hobbies: [
            {
                name: "Music"
            },
            {
                name: "Travel"
            },
            {
                name: "Cinema"
            },
            {
                name: "Cooking"
            },
            {
                name: "Games"
            }
        ]
    },
    professionalInfo: {
        professionalExperiences: [
            {
                positions: ["Backend Engineer", "Senior Backend Engineer"],
                at: "Sky Portugal, Lisbon, Portugal",
                logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Sky_Group_logo_2020.svg",
                start: new Date("01/01/2020"),
                description: `- Contributed to Sky's streaming services backend development primarily using Kotlin and Java during the initial year.\n
	- Transitioned to a new team created in collaboration with the existing team, where I assumed a leadership role following the departure of the senior developer.\n
	- Adapted to using TypeScript as the primary programming language in the new team, tasked with implementing backends for frontends to streamline business logic.\n
	- Recognized as a Team Lead and played a pivotal role in the growth and evolution of the team through mentoring and collaboration.\n
	- Involved in all stages of software development projects, from inception to deployment.\n
	- Developed skills in code testing, production service management, roadmap planning under tight schedules, addressing technical debt, and end-to-end problem-solving in high-pressure environments.\n`,
                type: "professional"
            },
            {
                positions: ["Backend Engineer"],
                at: "SAPO, Lisbon, Portugal",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_SAPO.png",
                start: new Date("01/03/2018"),
                end: new Date("01/01/2020"),
                description: `- Worked at SAPO for 2 years, contributing significantly to the company's platform development and enhancement efforts.\n
    - In the first year, focused on developing editorial tools and WordPress plugins using PHP, JavaScript, HTML, and CSS.\n
    - Aimed to streamline the editor experience and boost efficiency in content creation and management for SAPO's platform users.\n
    - Played a crucial role in empowering editors to produce and manage content more effectively.\n
    - In the second year, transitioned to working on features for SAPO's flagship product, its homepage - a news aggregating portal utilized by millions of users daily.\n
    - Engaged primarily with Java development to implement new functionalities and enhance user experience on the homepage.\n
    - Contributed to the ongoing success and improvement of SAPO's platform, demonstrating adaptability and expertise across different programming languages and projects.`,
                type: "professional"
            },
            {
                positions: ["Full Stack Developer"],
                at: "Outdare, Lisbon, Portugal",
                logo: "https://www.outdare.pt/wp-content/uploads//2020/07/banner.svg",
                start: new Date("01/02/2015"),
                end: new Date("01/03/2018"),
                description: `- Co-founded a startup, etNos, after graduating from college, which eventually merged into Outdare\n
	- Focused on enhancing the online presence and digital capabilities of small and medium-sized companies through website design and technology integration\n
	- Main role as Full Stack Developer but working very closely with all other areas of the company and participating in solving any challenge that would surface\n
	- Change in strategy, inspired the creation of a new product, Neurodare, aimed at competing with Imotions\n
	- Despite the efforts, the financial constraints resulted in parting ways with the startup world\n`,
                type: "professional"
            }
        ],
        academicExperiences: [
            {
                positions: ["Post-Graduate Degree"],
                at: "Faculdade de Ciências da Universidade de Lisboa, Lisbon, Portugal",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/ULisboa_logo.svg",
                start: new Date("01/09/2012"),
                end: new Date("01/02/2015"),
                description: `- Advanced studies in Computer Science Master's Degree with a specialization in Artificial Intelligence\n
    - In-depth exploration of cutting-edge AI technologies, algorithms, and methodologies\n
    - Hands-on experience in machine learning, deep learning, natural language processing, and computer vision\n
    - Application of AI techniques to various domains including robotics, healthcare, finance, and defense\n
    - Research focus on military ship coordinate prediction, addressing complex challenges in navigation and strategic planning\n
    - Utilization of data analysis, pattern recognition, and predictive modeling techniques to enhance prediction accuracy\n
    - Collaboration with industry professionals and academic mentors to leverage expertise and resources\n
    - Thesis project aimed at developing innovative solutions for improving military ship navigation and operational effectiveness\n
    - Despite being unfinished, the thesis project laid the groundwork for future research and contributed valuable insights to the field of AI-driven navigation systems.\n`,
                type: "academic"
            },
            {
                positions: ["Bachelor Degree"],
                at: "Faculdade de Ciências da Universidade de Lisboa, Lisbon, Portugal",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/ULisboa_logo.svg",
                start: new Date("01/09/2009"),
                end: new Date("01/07/2012"),
                description: `- Comprehensive understanding of fundamental concepts in Computer Science
    - Proficiency in programming languages and software development methodologies
    - Strong analytical and problem-solving skills honed through Mathematics and Physics coursework
    - Ability to apply theoretical knowledge to practical real-world scenarios
    - Experience collaborating with peers on projects and assignments
    - Exposure to various areas within Information Technology, such as database management, algorithms, networking, and cybersecurity
    - Continuous learning and adaptability in a fast-evolving field like technology
	- Opportunities to collaborate with Faculty's research departments`,
                type: "academic"
            }
        ],
        languages: [
            {
                language: "Portuguese",
                expertise: 100
            },
            {
                language: "English",
                expertise: 90
            },
            {
                language: "Spanish",
                expertise: 70
            }
        ],
        certifications: [
            {
                name: "Certificate C2 Proficiency in English",
                entity: "British Council"
            },
            {
                name: "Certificate C1 Advanced English",
                entity: "British Council"
            }
        ],
        achievements: [
            {
                name: "2021-2022 Technology and Engineering Emmy Award",
                entity: "The National Academy of Television Arts and Sciences"
            },
            {
                name: "Sky Star",
                entity: "Sky"
            }
        ],
        skills: [
            {
                name: "Problem solving"
            },
            {
                name: "Critical thinking"
            },
            {
                name: "Communication"
            },
            {
                name: "Planning"
            },
            {
                name: "Mentoring"
            },
            {
                name: "Organization"
            },
            {
                name: "Pragmatism"
            }
        ],
        tools: [
            {
                name: "Java",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
            },
            {
                name: "Kotlin",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
            },
            {
                name: "Typescript",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            },
            {
                name: "PHP",
                logo: "https://www.php.net/images/logos/new-php-logo.svg"
            },
            {
                name: "Javascript",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            },
            {
                name: "HTML",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            },
            {
                name: "CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            },
            {
                name: "MySQL",
                logo: "https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg"
            },
            {
                name: "MongoDB",
                logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
            },
            {
                name: "Apache Kafka",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Apache_kafka-icon.png"
            },
            {
                name: "Prometheus",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
            },
            {
                name: "Grafana",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg"
            },
            {
                name: "Kibana",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Elasticsearch_logo.svg"
            },
            {
                name: "Docker",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"
            },
            {
                name: "Kubernetes",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg"
            },
            {
                name: "Jenkins",
                logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg"
            },
            {
                name: "Github",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            },
            {
                name: "Gitlab",
                logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg"
            }
        ]
    }
};
</script>

<template>
    <v-timeline id="experience-timeline" direction="vertical">
        <v-timeline-item
            v-for="experience in data.professionalInfo.professionalExperiences"
            :key="experience.at"
        >
            <template>{{ experience.at }}</template>
            <div v-for="position in experience.positions" :key="position">
                <div class="text-h6">{{ position }}</div>
                <p>
                    {{
                        `${experience.start.getFullYear()} - ${
                            experience.end ? experience.end?.getFullYear() : "Current"
                        }`
                    }}
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<style lang="scss" scoped>
#experience-timeline {
    font-size: 14pt;
}
</style>
