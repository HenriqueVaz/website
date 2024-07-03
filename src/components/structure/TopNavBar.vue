<template>
    <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation id="top-bar" v-model="value" mode="shift" elevation=0>
            <v-btn value="resume" to="/resume" id="resume-tab" class="tab">
                <v-icon class="tab-button-icon mdi mdi-clipboard-text" />
                <span>Resume</span>
            </v-btn>
            <v-btn value="projects" to="/projects" id="projects-tab" class="tab">
                <v-icon class="tab-button-icon mdi mdi-lightbulb-on-outline" />
                <span>Projects</span>
            </v-btn>
            <v-btn value="music" to="/music" id="music-tab" class="tab">
                <v-icon class="tab-button-icon mdi mdi-music" />
                <span>Music</span>
            </v-btn>
            <v-btn value="travel" to="/travel" id="travel-tab" class="tab">
                <v-icon class="tab-button-icon mdi mdi-airplane" />
                <span>Travel</span>
            </v-btn>
            <v-btn value="blog" to="/blog" id="blog-tab" class="tab">
                <v-icon class="tab-button-icon mdi mdi-file-edit-outline" />
                <span>Blog</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<script setup></script>

<script>
export default {
    data: () => ({ value: 1 })
};
</script>

<style lang="scss" scoped>
@import "./../../assets/base.css";

#top-bar {
    background-color: #18314fff;
    top: 0;
}

.tab {
    color: white;
}

#resume-tab {
    background-color: #348aa7ff;
}

#projects-tab {
    background-color: #2a9d8fff;
}

#music-tab {
    background-color: #b4ceb3ff;
}

#travel-tab {
    background-color: #c06e52ff;
}

#blog-tab {
    background-color: #732c2cff;
}
</style>
