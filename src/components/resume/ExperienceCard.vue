<script setup lang="ts">
import { useDate } from "vuetify";

defineProps(["title", "experiences"]);

const date = useDate();
</script>

<template>
    <v-card class="w-100">
        <template v-slot:title>
            <span class="font-weight-bold">{{ title }}</span>
        </template>

        <v-card-text class="bg-surface-light pa-2">
            <v-list slim open-strategy="single">
                <v-list-group v-for="experience in experiences">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props">
                            <!--<template v-slot:prepend>
                                <v-avatar class="ma-2" size="64px">
                                    <v-img alt="Avatar" :src="experience.logo"></v-img>
                                </v-avatar>
                            </template>-->
                            <v-list-item-title class="text-wrap">
                                <span class="font-weight-bold">{{
                                    experience.positions.join(", ")
                                }}</span>
                                <br />
                                {{ experience.at }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-wrap">
                                {{
                                    `${date.format(experience.start, "monthAndYear")} - ${experience.end ? date.format(experience.end, "monthAndYear") : "Present"}`
                                }}
                            </v-list-item-subtitle>
                        </v-list-item>
                    </template>
                    <v-list slim>
                        <v-list-item
                            slim
                            density="compact"
                            v-for="(item, index) in experience.description"
                        >
                            <template v-slot:prepend>
                                <v-icon icon="mdi-check-circle"></v-icon>
                            </template>
                            <v-list-item-title class="text-wrap pb-2">
                                {{ item }}
                            </v-list-item-title>
                            <v-divider length="95%"
                                v-if="index < experience.description.length - 1"
                                :key="`${index}-divider`"
                            ></v-divider>
                        </v-list-item>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-card-text>
    </v-card>
</template>
