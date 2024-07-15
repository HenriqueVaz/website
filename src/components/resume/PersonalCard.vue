<script setup lang="ts">
import type { PersonalInfo } from "@/models/resume/personalInfo";

const data: PersonalInfo = {
    name: "Henrique Vaz",
    birthDate: new Date("21/10/1991"),
    location: "Lisbon, Portugal",
    email: "henrique.vaz.91@gmail.com",
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
            expertise: 50
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
            group: "Programming Languages",
            items: [
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
                }
            ]
        },
        {
            group: "Persistence",
            items: [
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
                    name: "Redis",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Apache_kafka-icon.png"
                }
            ]
        },
        {
            group: "Version Management",
            items: [
                {
                    name: "Github",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                },
                {
                    name: "Gitlab",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg"
                }
            ]
        },
        {
            group: "CI/CD",
            items: [
                {
                    name: "Jenkins",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg"
                },
                {
                    name: "Gitlab CI",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg"
                }
            ]
        },
        {
            group: "Monitoring",
            items: [
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
                }
            ]
        },
        {
            group: "Containerization",
            items: [
                {
                    name: "Docker",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"
                },
                {
                    name: "Kubernetes",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg"
                }
            ]
        }
    ]
};
</script>

<template>
    <v-card class="mx-auto" :subtitle="data.location">
        <template v-slot:prepend>
            <v-avatar class="ma-2" size="64px">
                <v-img
                    alt="Avatar"
                    src="https://media.licdn.com/dms/image/C4D03AQEiRrMGb96N8Q/profile-displayphoto-shrink_400_400/0/1659544491192?e=1725494400&v=beta&t=nIfNe6uUnRIxugTOzzg3xpp4nLPH9492uFmkk10n8Q8"
                ></v-img>
            </v-avatar>
        </template>

        <template v-slot:title>
            <span class="font-weight-black text-h5">{{ data.name }}</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            <v-list>
                <v-list-item prepend-icon="mdi-email" class="main-list-item">
                    <template v-slot:title><p class="font-weight-black">E-mail</p></template>
                    <template v-slot:subtitle>{{ data.email }}</template>
                </v-list-item>
                <v-divider class="ma-2"></v-divider>
                <v-list-item class="main-list-item">
                    <template v-slot:title><p class="font-weight-black">Languages</p></template>
                    <template v-slot:subtitle>
                        <v-list>
                            <v-list-item
                                :title="language.language"
                                v-for="language in data.languages"
                            >
                                <v-progress-linear
                                    color="black"
                                    :model-value="language.expertise"
                                ></v-progress-linear>
                            </v-list-item>
                        </v-list>
                    </template>
                </v-list-item>
                <v-divider class="ma-2"></v-divider>
                <v-list-item class="main-list-item">
                    <template v-slot:title><p class="font-weight-black">Tools</p></template>
                    <template v-slot:subtitle>
                        <v-list>
                            <v-list-item v-for="toolGroup in data.tools">
                                <template v-slot:title>
                                    <p class="font-weight-bold">{{ toolGroup.group }}</p>
                                </template>
                                {{ toolGroup.items.map((item) => item.name).join(", ") }}
                                <!--<v-img v-for="item in toolGroup.items" :src="item.logo" width="50px"></v-img>-->
                            </v-list-item>
                        </v-list>
                    </template>
                </v-list-item>
                <v-divider class="ma-2"></v-divider>
                <v-list-item class="main-list-item">
                    <template v-slot:title><p class="font-weight-black">Skills</p></template>
                    <template v-slot:subtitle>
                        <v-list density="compact">
                            {{ data.skills.map((skill) => skill.name).join(", ") }}
                        </v-list>
                    </template>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<style lang="scss" scoped>
.main-list-item {
    font-weight: 700 !important;
}
</style>
