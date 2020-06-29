<template>
    <footer role="contentinfo" class="footer mt-auto py-4">
        <div class="container-fluid">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto">
                        <p class="float-left">
                            <font-awesome-icon
                                :icon="['fas', 'code']"
                                class="mx-1"
                            ></font-awesome-icon>
                            Created by
                            <a
                                class="authorAnchor"
                                href="https://github.com/lf-hernandez"
                                >Luis Felipe Hernandez</a
                            >
                        </p>
                    </div>
                    <div class="col-auto">
                        <a
                            class="brandIconAnchor mr-3"
                            href="https://www.instagram.com/junkyard.strong/"
                            target="_blank"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'instagram']"
                            ></font-awesome-icon>
                        </a>
                        <a
                            class="brandIconAnchor"
                            href="mailto: junkyardstrengthsystems@gmail.com"
                            target="_blank"
                        >
                            <font-awesome-icon
                                :icon="['fas', 'envelope']"
                            ></font-awesome-icon>
                        </a>
                    </div>
                    <div class="col-auto">
                        <p class="float-right">
                            &copy;<time>{{ new Date().getFullYear() }}</time>
                            Junkyard Strength Systems. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" src="./AppFooter.scss"></style>
