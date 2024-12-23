import {defineStore} from "pinia";

export const useAudioPlayerStore = defineStore('audioPlayer', {
    state() {
        return {
            audio: new Audio('https://drive.usercontent.google.com/download?id=1nqc5yMB_F1WcdnSGCt19VCweBA3QMr09&export=download&authuser=0&confirm=t&uuid=14f65da3-fa2e-4906-ba92-067602d218bf&at=APvzH3ruqLEtDeFqvpmzWsgWH0dB:1734953323293'),
            isPaused: true,
            isNotOpen: true,
            randTrack: Math.floor(Math.random() * 3) + 1,
            firstPlay: true,
            artists: [
                {
                    name: 'LoFi Girl',
                    src: 'https://i.scdn.co/image/ab6761610000517431a573acf9cd861af04572f0',
                    href: 'https://open.spotify.com/artist/1eDIWVJt7ZWKsrXw5WVNsN',
                    color: 'text-purple-200'
                },
                {
                    name: 'LoFi Fruits',
                    src: 'https://i.scdn.co/image/ab67616100005174a54adba5045ec1bf457a9666',
                    href: 'https://open.spotify.com/artist/1dABGukgZ8XKKOdd2rVSHM',
                    color: 'text-sky-400'
                },
                {
                    name: 'LoFi Waiter',
                    src: 'https://i.scdn.co/image/ab676161000051742576a1099bd554479e2e0e12',
                    href: 'https://open.spotify.com/artist/5H5W5vmpQSBmQv1uMVor61',
                    color: 'text-emerald-500'
                },
                {
                    name: 'LoFi Pulse',
                    src: 'https://i.scdn.co/image/ab67616100005174e22365523631b07ac32ebe25',
                    href: 'https://open.spotify.com/artist/4AguL7db3ln1rGY2JqpzBQ',
                    color: "text-white"
                }
            ],
            audioTracks: [
                {
                    url: '',
                    duration: 5065
                },
                {
                    url: '',
                    duration: 3738
                },
                {
                    url: '',
                    duration: 3719
                }
            ]
        }
    },
    actions: {
        play() {
            if (this.firstPlay) {
                this.audio.currentTime = Math.floor(Math.random() * this.audioTracks[this.randTrack].duration) + 1
                this.firstPlay= false;
            }
            this.audio.play();
            this.isPaused = false;
        },
        pause()  {
            this.audio.pause();
            this.isPaused = true;
        }
    },
})