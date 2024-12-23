import cat1 from "../assets/cat1.webp";import cat2 from "../assets/cat2.webp";import cat3 from "../assets/cat3.webp"
import {ref} from "vue";

export default () => {
    const images = ref([
        cat1,
        cat2,
        cat3
    ])
    return {
        images
    }
}