<template>
    <div class="bg-white dark:bg-stone-100 p-6 rounded-lg shadow-lg">
        <div class="flex justify-center items-center">
            <div class="text-center">
                <div class="title text-neutral-content text-xl font-semibold text-purple-300 mb-4">นับถอยหลังสู่งานแต่ง</div>
                <div class="date text-neutral-content text-xl font-semibold text-purple-400 mb-4">{{ dateWedding }}</div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="grid grid-rows-1 auto-cols-max grid-flow-col gap-4 text-center text-amber-300">
                
                <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                    <span class="countdown font-mono text-5xl">
                        <span style="--value:15;">{{ timeLeft.days }}</span>
                    </span>
                    วัน
                </div>
                <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                    <span class="countdown font-mono text-5xl">
                        <span style="--value:10;">{{ timeLeft.hours }}</span>
                    </span>
                    ชั่วโมง
                </div>
                <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                    <span class="countdown font-mono text-5xl">
                        <span style="--value:24;">{{ timeLeft.minutes }}</span>
                    </span>
                    นาที
                </div>
                <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                    <span class="countdown font-mono text-5xl">
                        <span style="--value:${counter};">{{ timeLeft.seconds }}</span>
                    </span>
                    วินาที
                </div>
            </div>
        </div>
        <!-- <div class="flex justify-center items-center">
            <div class="text-center">
                <p class="mt-2 text-gray-500">เวลาที่เหลืออยู่</p>
            </div>
        </div> -->
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            timeLeft: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            timer: null,
            dateWedding: ""
        };
    },
    created() {
        // Start countdown when the component is created
        const targetDate = new Date('2025-03-01T15:00:00');
        this.startCountdown(targetDate);
        this.formatDate(targetDate);
    },
    beforeDestroy() {
        // Clear the interval when the component is destroyed to avoid memory leaks
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        startCountdown(targetDate) {
            // Set target date: March 1, 2024, at 00:00:00

            //const dateWedding = formatDate(targetDate);
            this.timer = setInterval(() => {
                const now = new Date();
                const remainingTime = targetDate - now;

                if (remainingTime <= 0) {
                    clearInterval(this.timer); // Stop the countdown when the time is up
                } else {
                    this.updateTimeLeft(remainingTime);
                }
            }, 1000);
        },

        updateTimeLeft(remainingTime) {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            this.timeLeft = {
                days,
                hours,
                minutes,
                seconds,
            };
        },

        formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const year = date.getFullYear() + 543;
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');

            this.dateWedding = `1 มีนาคม ${year} ${hours}:${minutes}:${seconds}`;
        },
    },
};
</script>

<style scoped>
/* Additional scoped styles for the component (Optional) */
.title {
  font-size: 2em;
  font-weight: bold;
}
.date {
  font-size: 1.5em;
}
</style>