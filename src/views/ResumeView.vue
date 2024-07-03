<script setup lang="ts">
import AcademicCard from "../components/resume/AcademicCard.vue";
import PersonalCard from "../components/resume/PersonalCard.vue";
import ProfessionalCard from "../components/resume/ProfessionalCard.vue";
</script>

<template>
    <v-container id="resume-view">
        <v-row>
            <v-col cols="4">
                <v-row id="personal-section" class="pt-5">
                    <PersonalCard />
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-row id="professional-section" class="pt-5">
                    <ProfessionalCard />
                </v-row>
                <v-row id="academic-section" class="pt-5">
                    <AcademicCard />
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

#professional-section {
    width: 100%;
}

#academic-section {
    width: 100%;
}

#personal-section {
    width: 100%;
}
</style>
