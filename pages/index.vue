<template>
  <div>
    <section id="header" class="text-center mt-5">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">
          Himpunan <span class="text-green-600">Mahasiswa Islam</span>
          <br />
          <span class="text-green-600">Komisariat</span> Fakultas Teknik
          <br />
          Cabang Ciputat
        </h1>
        <div class="mt-10">
          <a
            href="#"
            class="text-lg font-medium text-white hover:text-gray-500 hover:bg-green-200 cursor-pointer bg-green-600 px-6 py-2 rounded-lg mt-10"
          >
            Gabung Hmi
          </a>
        </div>
      </div>
      <div class="md:-mt-40">
        <img src="~/assets/banner.png" alt="" class="w-full hidden md:block" />
      </div>
    </section>

    <section class="relative">
      <div class="">
        <div class="md:absolute hidden md:block w-full md:top-6 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="z-0"
          >
            <path
              fill=" #17cfb0"
              fillOpacity="1"
              d="M0,128L16,154.7C32,181,64,235,96,224C128,213,160,139,192,128C224,117,256,171,288,176C320,181,352,139,384,128C416,117,448,139,480,128C512,117,544,75,576,85.3C608,96,640,160,672,160C704,160,736,96,768,96C800,96,832,160,864,192C896,224,928,224,960,234.7C992,245,1024,267,1056,229.3C1088,192,1120,96,1152,53.3C1184,11,1216,21,1248,53.3C1280,85,1312,139,1344,154.7C1376,171,1408,149,1424,138.7L1440,128L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div class="md:absolute hidden md:block w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="z-20"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L16,154.7C32,181,64,235,96,224C128,213,160,139,192,128C224,117,256,171,288,176C320,181,352,139,384,128C416,117,448,139,480,128C512,117,544,75,576,85.3C608,96,640,160,672,160C704,160,736,96,768,96C800,96,832,160,864,192C896,224,928,224,960,234.7C992,245,1024,267,1056,229.3C1088,192,1120,96,1152,53.3C1184,11,1216,21,1248,53.3C1280,85,1312,139,1344,154.7C1376,171,1408,149,1424,138.7L1440,128L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="md:px-20 z-50 relative mt-12 px-6">
        <h4
          class="font-semibold text-3xl mb-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-200 relative before:w-64 before:h-8 before:mt-8"
        >
          <div class="relative">Pelajari Skills Baru</div>
          <span class="">
            <span class="relative">Sesuai Dengan Minatmu</span>
          </span>
        </h4>
        <div class="grid grid-flow-row md:grid-cols-12 grid-cols-1 gap-4 z-40">
          <div
            class="col-span-4 bg-white p-6 rounded-lg shadow-lg md:block flex"
            v-for="(item, index) of 6"
            :key="index"
          >
            <img
              class="rounded-lg md:w-full w-24 mr-4 md:h-52 h-full object-cover object-center"
              src="https://buildwithangga.com/storage/assets/thumbnails/thumbnail%20kelas%20%20Mastering%20Flutter%20BLoC%20dan%20Null%20Safety_%20Flight%20Travel%20App%20Development%20photo%201%20(1).png"
            />
            <div>
              <div
                class="md:font-medium font-bold md:text-2xl mt-2 md:block hidden"
              >
                Full-Stack Laravel Flutter: Build e-Wallet Mobile Apps lorem
              </div>
              <div
                class="md:font-medium font-bold md:text-2xl mt-2 md:hidden block"
              >
                Full-Stack Laravel Flutter: Build e-Wallet Mobile Apps lorem
              </div>
              <div class="text-gray-400 mt-2 md:block hidden">
                Next.js, built by the same team as Vercel, is the most powerful
                React framework.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <div class="">
        <img src="~/assets/pengurus.png" alt="HMI KOMFAKTEK" />
      </div>
    </section>

    <section class="bg-gray-100 relative pt-32 pb-20">
      <div class="md:px-20 px-6">
        <div class="text-3xl text-gray-800 relative z-10 font-bold">
          Melangkah Maju
        </div>
        <div class="grid grid-flow-row md:grid-cols-12 grid-cols-1 gap-6 mt-6">
          <div
            class="col-span-4 bg-white p-4 rounded-lg hover:shadow-2xl"
            v-for="(item, index) of 6"
            :key="index"
          >
            <div class="">
              <img
                src="https://1000startupdigital.id/wp-content/uploads/2022/08/EPS84-HUS-YouTube-1024x576.png"
                alt="HMI KOMFAKTEK"
              />
            </div>
            <div class="text-xl mt-2 font-bold">
              Ep 84: Agile & Growth Mindset
            </div>
            <hr class="my-3" />
            <div class="flex justify-between text-green-600">
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-2 text-sm">22/09/2022</div>
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="text-sm ml-2">Sekret HMI KOMFAKTEK</div>
              </div>
            </div>
            <hr class="my-3" />
            <div class="font-semibold">Danny Kosasih</div>
            <div class="text-gray-400 font-medium">
              Founder & CEO Didik & Co Tingkatkan kemampuan mengasah pola pikir
              untuk meningkatkan peluang bisnismu di masa depan.
            </div>
          </div>
        </div>
      </div>

      <div class="absolute w-full top-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,0L12.6,21.3C25.3,43,51,85,76,90.7C101.1,96,126,64,152,58.7C176.8,53,202,75,227,112C252.6,149,278,203,303,208C328.4,213,354,171,379,144C404.2,117,429,107,455,101.3C480,96,505,96,531,122.7C555.8,149,581,203,606,213.3C631.6,224,657,192,682,160C707.4,128,733,96,758,96C783.2,96,808,128,834,133.3C858.9,139,884,117,909,106.7C934.7,96,960,96,985,112C1010.5,128,1036,160,1061,149.3C1086.3,139,1112,85,1137,101.3C1162.1,117,1187,203,1213,218.7C1237.9,235,1263,181,1288,138.7C1313.7,96,1339,64,1364,69.3C1389.5,75,1415,117,1427,138.7L1440,160L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
