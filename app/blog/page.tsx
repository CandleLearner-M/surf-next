import HeroSection from "@/components/HeroSection/HeroSection";

function Blog() {
  const straplines = (
    <>
      <h1>discover.</h1>
      <h1>your.</h1>
      <h1>spirit.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        heroHeadlines={straplines}
        heroImgSrc="https://s3-alpha-sig.figma.com/img/d67b/daf1/c8ccfe4cd33308dbef65600d3d395f36?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dEh7T~-pJ-n2BFD87~manZfIhmFNwUVOrDHgaPm2weKYcYz-7~-BSBAwcdl1ROT4QdnqUpq3MQrgD2bRV4Ej-~LykORvIVOds9fELANNh3JM7m4lkqiwTXl~dYwNF-qYBpYYo0eDAmSBUa-McC8ForChPhh3Uo7jqW54STds8AfcmnikL-LnFNup6maRerbGCdod3MfBkenzJE4~Gqk-apQNdYv3Y2PDNiK-MPEWwQisb9OW6fwMd97yJv~x23pHHFsiPy2feeq4qGET6wNBFebBUJbFWi7LyPscpdqwbF3etAE17hfAScd9CfjZuFarbNCSyHf5ZD9qiKQkWPpQNQ__"

        theme="orange"
      />
    </main>
  );
}

export default Blog;
