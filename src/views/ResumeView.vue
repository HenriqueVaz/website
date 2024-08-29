<script setup lang="ts">
import type { Experience } from "@/models";
import ExperienceCard from "../components/resume/ExperienceCard.vue";
import PersonalCard from "../components/resume/PersonalCard.vue";

const professionalExperiences: Experience[] = [
    {
        positions: ["Senior Backend Engineer", "Backend Engineer"],
        at: "Sky Portugal, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Sky_Group_logo_2020.svg",
        start: "2020-01-01",
        description: [
            "Contributed to Sky's streaming services backend development primarily using Kotlin and Java during the initial year.",
            "Transitioned to a new team created in collaboration with the existing team, where I assumed a leadership role following the departure of the senior developer.",
            "Adapted to using TypeScript as the primary programming language in the new team, tasked with implementing backends for frontends to streamline business logic.",
            "Recognized as a Team Lead and played a pivotal role in the growth and evolution of the team through mentoring and collaboration.",
            "Involved in all stages of software development projects, from inception to deployment.",
            "Developed skills in code testing, production service management, roadmap planning under tight schedules, addressing technical debt, and end-to-end problem-solving in high-pressure environments."
        ],
        type: "professional"
    },
    {
        positions: ["Backend Engineer"],
        at: "SAPO, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_SAPO.png",
        start: "2018-03-01",
        end: "2020-01-01",
        description: [
            "Worked at SAPO for 2 years, contributing significantly to the company's platform development and enhancement efforts.",
            "In the first year, focused on developing editorial tools and WordPress plugins using PHP, JavaScript, HTML, and CSS.",
            "Aimed to streamline the editor experience and boost efficiency in content creation and management for SAPO's platform users.",
            "Played a crucial role in empowering editors to produce and manage content more effectively.",
            "In the second year, transitioned to working on features for SAPO's flagship product, its homepage - a news aggregating portal utilized by millions of users daily.",
            "Engaged primarily with Java development to implement new functionalities and enhance user experience on the homepage.",
            "Contributed to the ongoing success and improvement of SAPO's platform, demonstrating adaptability and expertise across different programming languages and projects."
        ],
        type: "professional"
    },
    {
        positions: ["Full Stack Developer"],
        at: "Outdare, Lisbon, Portugal",
        logo: "https://www.outdare.pt/wp-content/uploads//2020/07/banner.svg",
        start: "2015-02-01",
        end: "2018-03-01",
        description: [
            "Co-founded a startup, etNos, after graduating from college, which eventually merged into Outdare.",
            "Focused on enhancing the online presence and digital capabilities of small and medium-sized companies through website design and technology integration.",
            "Main role as Full Stack Developer but working very closely with all other areas of the company and participating in solving any challenge that would surface.",
            "Change in strategy, inspired the creation of a new product, Neurodare, aimed at competing with Imotions.",
            "Despite the efforts, the financial constraints resulted in parting ways with the startup world."
        ],
        type: "professional"
    }
];

const academicExperiences: Experience[] = [
    {
        positions: ["Post-Graduate Degree"],
        at: "Faculdade de Ciências da Universidade de Lisboa, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/ULisboa_logo.svg",
        start: "2012-09-01",
        end: "2015-02-01",
        description: [
            "Advanced studies in Computer Science Master's Degree with a specialization in Artificial Intelligence.",
            "In-depth exploration of cutting-edge AI technologies, algorithms, and methodologies.",
            "Hands-on experience in machine learning, deep learning, natural language processing, and computer vision.",
            "Application of AI techniques to various domains including robotics, healthcare, finance, and defense.",
            "Research focus on military ship coordinate prediction, addressing complex challenges in navigation and strategic planning.",
            "Utilization of data analysis, pattern recognition, and predictive modeling techniques to enhance prediction accuracy.",
            "Collaboration with industry professionals and academic mentors to leverage expertise and resources.",
            "Thesis project aimed at developing innovative solutions for improving military ship navigation and operational effectiveness.",
            "Despite being unfinished, the thesis project laid the groundwork for future research and contributed valuable insights to the field of AI-driven navigation systems."
        ],
        type: "academic"
    },
    {
        positions: ["Bachelor Degree"],
        at: "Faculdade de Ciências da Universidade de Lisboa, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/ULisboa_logo.svg",
        start: "2009-09-01",
        end: "2012-07-01",
        description: [
            "Comprehensive understanding of fundamental concepts in Computer Science.",
            "Proficiency in programming languages and software development methodologies.",
            "Strong analytical and problem-solving skills honed through Mathematics and Physics coursework.",
            "Ability to apply theoretical knowledge to practical real-world scenarios.",
            "Experience collaborating with peers on projects and assignments.",
            "Exposure to various areas within Information Technology, such as database management, algorithms, networking, and cybersecurity.",
            "Continuous learning and adaptability in a fast-evolving field like technology.",
            "Opportunities to collaborate with Faculty's research departments"
        ],
        type: "academic"
    }
];
</script>

<template>
    <v-container id="resume-view" fluid>
        <v-row>
            <v-col cols="12" sm="3" md="3" class="pa-5">
                <v-row id="personal-section">
                    <PersonalCard />
                </v-row>
            </v-col>
            <v-col cols="12" sm="9" md="9" class="pa-5">
                <v-row id="professional-section">
                    <ExperienceCard
                        title="Professional Experience"
                        :experiences="professionalExperiences"
                    />
                </v-row>
                <v-row id="academic-section" class="pt-5">
                    <ExperienceCard
                        title="Academic Experience"
                        :experiences="academicExperiences"
                    />
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
@import "../assets/base.css";

#resume-view {
    background-color: var(--blue-munsell);
}
</style>
