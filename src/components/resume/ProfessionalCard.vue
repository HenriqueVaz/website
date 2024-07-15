<script setup lang="ts">
import type { Experience } from "@/models/resume/experience";
import { useDate } from "vuetify";

const date = useDate();

const data: Experience[] = [
    {
        positions: ["Backend Engineer", "Senior Backend Engineer"],
        at: "Sky Portugal, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Sky_Group_logo_2020.svg",
        start: "2020-01-01",
        description: `Contributed to Sky's streaming services backend development primarily using Kotlin and Java during the initial year.
	Transitioned to a new team created in collaboration with the existing team, where I assumed a leadership role following the departure of the senior developer.
	Adapted to using TypeScript as the primary programming language in the new team, tasked with implementing backends for frontends to streamline business logic.
	Recognized as a Team Lead and played a pivotal role in the growth and evolution of the team through mentoring and collaboration.
	Involved in all stages of software development projects, from inception to deployment.
	Developed skills in code testing, production service management, roadmap planning under tight schedules, addressing technical debt, and end-to-end problem-solving in high-pressure environments.`,
        type: "professional"
    },
    {
        positions: ["Backend Engineer"],
        at: "SAPO, Lisbon, Portugal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_SAPO.png",
        start: "2018-03-01",
        end: "2020-01-01",
        description: `Worked at SAPO for 2 years, contributing significantly to the company's platform development and enhancement efforts.
    In the first year, focused on developing editorial tools and WordPress plugins using PHP, JavaScript, HTML, and CSS.
    Aimed to streamline the editor experience and boost efficiency in content creation and management for SAPO's platform users.
    Played a crucial role in empowering editors to produce and manage content more effectively.
    In the second year, transitioned to working on features for SAPO's flagship product, its homepage - a news aggregating portal utilized by millions of users daily.
    Engaged primarily with Java development to implement new functionalities and enhance user experience on the homepage.
    Contributed to the ongoing success and improvement of SAPO's platform, demonstrating adaptability and expertise across different programming languages and projects.`,
        type: "professional"
    },
    {
        positions: ["Full Stack Developer"],
        at: "Outdare, Lisbon, Portugal",
        logo: "https://www.outdare.pt/wp-content/uploads//2020/07/banner.svg",
        start: "2015-02-01",
        end: "2018-03-01",
        description: `Co-founded a startup, etNos, after graduating from college, which eventually merged into Outdare
	Focused on enhancing the online presence and digital capabilities of small and medium-sized companies through website design and technology integration
	Main role as Full Stack Developer but working very closely with all other areas of the company and participating in solving any challenge that would surface
	Change in strategy, inspired the creation of a new product, Neurodare, aimed at competing with Imotions
	Despite the efforts, the financial constraints resulted in parting ways with the startup world`,
        type: "professional"
    }
];
</script>

<template>
    <v-card class="mx-auto">
        <template v-slot:title>
            <span class="font-weight-black">Professional Experience</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            <v-list>
                <v-list-item v-for="experience in data">
                    <template v-slot:prepend>
                        <v-avatar class="ma-2" size="64px">
                            <v-img alt="Avatar" :src="experience.logo"></v-img>
                        </v-avatar>
                    </template>
                    <template v-slot:title>
                        <span class="font-weight-bold">{{ experience.at }}</span>
                        <br />
                        {{
                            `${date.format(experience.start, "monthAndYear")} - ${experience.end ? date.format(experience.end, "monthAndYear") : "Present"}`
                        }}
                    </template>
					<template v-slot:subtitle>
                        {{
                            `${experience.positions.join(", ")}`
                        }}
                    </template>
                    <v-list>
                        <v-list-item v-for="item in experience.description.split('\n')">
                            {{ item }}
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
