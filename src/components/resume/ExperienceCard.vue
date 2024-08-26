<script setup lang="ts">
import { useDate } from 'vuetify';

defineProps(["title", "experiences"]);

const date = useDate();

</script>

<template>
    <v-card class="w-100">
        <template v-slot:title>
            <span class="font-weight-bold">{{ title }}</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            <v-list open-strategy="single">
                <v-list-group v-for="experience in experiences">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="experience.positions.join(', ')">
                            <!--<template v-slot:prepend>
                                <v-avatar class="ma-2" size="64px">
                                    <v-img alt="Avatar" :src="experience.logo"></v-img>
                                </v-avatar>
                            </template>-->
                            <template v-slot:title>
                                <span class="font-weight-bold">{{
                                    experience.positions.join(", ")
                                }}</span>
                                <br />
                                {{ experience.at }}
                            </template>
                            <template v-slot:subtitle>
                                {{
                                    `${date.format(experience.start, "monthAndYear")} - ${experience.end ? date.format(experience.end, "monthAndYear") : "Present"}`
                                }}
                            </template>
                        </v-list-item>
                    </template>
                    <v-list>
                        <v-list-item density="compact" v-for="item in experience.description.split('\n')">
                            {{ item }}
                        </v-list-item>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-card-text>
    </v-card>
</template>
