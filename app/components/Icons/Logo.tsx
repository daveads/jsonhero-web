import { Link } from "remix";

export function Logo({
  className,
  width = "100%",
}: {
  className?: string;
  width?: string;
}) {
  return (
    <Link to="/" aria-label="JSON Hero homepage">
      <svg
        className={className}
        width={width}
        height="50"
        viewBox="0 0 196 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.6178 47.452C35.7512 47.452 44.7766 38.4266 44.7766 27.2933C44.7766 16.1599 35.7512 7.13446 24.6178 7.13446C13.4844 7.13446 4.45898 16.1599 4.45898 27.2933C4.45898 38.4266 13.4844 47.452 24.6178 47.452Z"
          fill="#312E81"
        />
        <path
          d="M39.7024 29.6068C40.025 29.3266 40.2864 28.983 40.4705 28.5974C40.6545 28.2119 40.7573 27.7925 40.7723 27.3655C40.7873 26.9385 40.7143 26.513 40.5578 26.1154C40.4013 25.7179 40.1647 25.3568 39.8626 25.0546C39.5605 24.7524 39.1995 24.5157 38.802 24.359C38.4045 24.2024 37.979 24.1292 37.552 24.1441C37.125 24.159 36.7056 24.2616 36.32 24.4455C35.9343 24.6294 35.5907 24.8907 35.3104 25.2132C36.5232 24.0004 37.4387 21.1185 36.2258 19.9057C35.0114 18.6929 32.1296 19.6083 30.9167 20.8212C32.1296 19.6083 33.045 16.7265 31.8322 15.5121C30.6194 14.2977 27.7375 15.2147 26.5247 16.4276C26.8177 16.1328 27.0488 15.7824 27.2042 15.397C27.3597 15.0115 27.4364 14.5989 27.4299 14.1833C27.4234 13.7677 27.3337 13.3577 27.1662 12.9773C26.9987 12.597 26.7568 12.254 26.4547 11.9686C25.2169 10.8025 23.2412 10.9239 22.0393 12.1243L18.2451 15.9216C18.1716 15.9937 18.1024 16.0701 18.038 16.1504L18.0271 16.1395L11.9349 22.2302C11.3085 22.8565 10.8116 23.6 10.4725 24.4184C10.1335 25.2368 9.95901 26.1139 9.95901 26.9997C9.95901 27.8856 10.1335 28.7627 10.4725 29.5811C10.8116 30.3995 11.3085 31.143 11.9349 31.7693L11.0708 30.9052L5.5 33.7046C6.84673 38.0483 6.06079 37.812 9.5 41.259C12.9392 44.706 13.6802 45.1517 18.0271 46.5L20.8327 40.6608L19.9686 39.7968C20.5947 40.4231 21.3382 40.92 22.1564 41.259C22.9747 41.598 23.8517 41.7725 24.7374 41.7725C25.6231 41.7725 26.5001 41.598 27.3183 41.259C28.1366 40.92 28.88 40.4231 29.5062 39.7968L35.5984 33.7046L35.5875 33.6937C35.6678 33.6293 35.7442 33.5601 35.8164 33.4866L39.7024 29.6068Z"
          fill="#FBBF24"
        />
        <path
          opacity="0.6"
          d="M29.8145 39.4884L32.248 36.879L17.9587 22.2737L17.476 27.1904L23.1899 32.9042L20.3874 32.775L14.876 27.4971L15.3181 30.0146L18.7169 33.4134C19.3974 34.0937 20.3092 34.4929 21.2707 34.5315C22.2322 34.5702 23.1731 34.2455 23.906 33.622L29.8145 39.4884Z"
          fill="#D0830B"
        />
        <path
          opacity="0.6"
          d="M19.7681 39.8154L19.0566 39.339L15.7847 45.9271L17.5004 46.5L20.7489 40.7963L19.7681 39.8154Z"
          fill="#D0830B"
        />
        <path
          d="M18.0274 16.1333L11.9353 22.2255C11.3089 22.8517 10.812 23.5951 10.473 24.4133C10.134 25.2316 9.95947 26.1086 9.95947 26.9943C9.95947 27.88 10.134 28.757 10.473 29.5752C10.812 30.3935 11.3089 31.1369 11.9353 31.7631"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M35.5986 33.7046L29.5064 39.7968C28.8802 40.4232 28.1368 40.92 27.3185 41.2591C26.5003 41.5981 25.6233 41.7726 24.7376 41.7726C23.8519 41.7726 22.9749 41.5981 22.1566 41.2591C21.3384 40.92 20.5949 40.4232 19.9688 39.7968"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M20.833 40.6593L18 46.5"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M11.0709 30.899L5.5 34"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M9.68359 34.1577L6.5 36"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12.0977 22.0806L13.0629 21.1154"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M13.1722 33.6095L11.6309 32.0682L12.2412 31.4579L14.7416 33.9583C14.7602 33.9762 14.7721 34.0001 14.7752 34.0258C14.7782 34.0516 14.7723 34.0776 14.7583 34.0994C14.7444 34.1212 14.7233 34.1376 14.6987 34.1456C14.674 34.1537 14.6474 34.1529 14.6232 34.1436L13.1722 33.6095Z"
          fill="#0F172A"
        />
        <path d="M19.19 32.0293L14.8789 27.7166Z" fill="#FBBF24" />
        <path
          d="M19.6635 40.1018L18.6312 39.0696C18.6128 39.0522 18.6009 39.029 18.5973 39.004C18.5937 38.9789 18.5988 38.9533 18.6116 38.9315C18.6244 38.9096 18.6443 38.8927 18.6679 38.8836C18.6915 38.8745 18.7176 38.8736 18.7418 38.8812L20.034 39.2518L20.2738 39.4915L19.6635 40.1018Z"
          fill="#0F172A"
        />
        <path
          d="M24.6178 47.452C35.7512 47.452 44.7766 38.4266 44.7766 27.2933C44.7766 16.1599 35.7512 7.13446 24.6178 7.13446C13.4844 7.13446 4.45898 16.1599 4.45898 27.2933C4.45898 38.4266 13.4844 47.452 24.6178 47.452Z"
          stroke="#1B1966"
          strokeWidth="1.51676"
          strokeMiterlimit="10"
        />
        <path
          d="M14.9494 12.9072L3 1L10.4104 22.3794L10.7439 16.1015L36.8456 42.2032L37.2121 37.1606L49.2366 49.1429L41.6074 27.2876L41.0537 33.5774L15.2131 7.96608L14.9494 12.9072Z"
          fill="#FDE047"
          stroke="#0F172A"
          strokeWidth="0.833187"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.5171 16.4258C27.7301 15.2128 27.7301 13.2462 26.5171 12.0332C25.3041 10.8202 23.3375 10.8202 22.1245 12.0332L18.2438 15.9139C17.0309 17.1268 17.0309 19.0935 18.2438 20.3064C19.4568 21.5194 21.4234 21.5194 22.6364 20.3064L26.5171 16.4258Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M31.9639 19.7669C33.1769 18.5539 33.1769 16.5873 31.9639 15.3743C30.7509 14.1613 28.7843 14.1613 27.5713 15.3743L22.6381 20.3074C21.4252 21.5204 21.4252 23.487 22.6381 24.7C23.8511 25.913 25.8178 25.913 27.0307 24.7L31.9639 19.7669Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M36.3579 24.1607C37.5709 22.9477 37.5709 20.9811 36.3579 19.7681C35.1449 18.5552 33.1783 18.5552 31.9653 19.7681L27.0322 24.7013C25.8192 25.9142 25.8192 27.8809 27.0322 29.0939C28.2452 30.3068 30.2118 30.3068 31.4248 29.0939L36.3579 24.1607Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M39.6973 29.6056C40.9103 28.3926 40.9103 26.426 39.6973 25.213C38.4843 24 36.5177 24 35.3047 25.213L31.424 29.0937C30.211 30.3067 30.211 32.2733 31.424 33.4863C32.637 34.6993 34.6036 34.6993 35.8166 33.4863L39.6973 29.6056Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M12.8564 21.3022C13.44 20.7213 14.2299 20.3951 15.0532 20.3951C15.8766 20.3951 16.6665 20.7213 17.25 21.3022L23.5835 27.6357C24.1644 28.2192 24.4906 29.0091 24.4906 29.8325C24.4906 30.6559 24.1644 31.4457 23.5835 32.0293C23 32.6102 22.2101 32.9363 21.3867 32.9363C20.5634 32.9363 19.7735 32.6102 19.1899 32.0293"
          fill="#FBBF24"
        />
        <path
          d="M12.8564 21.3022C13.44 20.7213 14.2299 20.3951 15.0532 20.3951C15.8766 20.3951 16.6665 20.7213 17.25 21.3022L23.5835 27.6357C24.1644 28.2192 24.4906 29.0091 24.4906 29.8325C24.4906 30.6559 24.1644 31.4457 23.5835 32.0293C23 32.6102 22.2101 32.9363 21.3867 32.9363C20.5634 32.9363 19.7735 32.6102 19.1899 32.0293"
          stroke="#0F172A"
          strokeWidth="0.862527"
          strokeMiterlimit="10"
        />
        <path
          d="M22.313 16.5691L21.9816 16.2377C21.4867 15.7428 20.6842 15.7428 20.1893 16.2377L19.1314 17.2957C18.6364 17.7906 18.6364 18.593 19.1313 19.0879L19.4627 19.4193C19.9576 19.9142 20.7601 19.9142 21.255 19.4193L22.313 18.3614C22.8079 17.8664 22.8079 17.064 22.313 16.5691Z"
          fill="#F59E0B"
        />
        <path
          d="M21.5713 27.892C20.9845 27.3053 20.0335 27.305 19.4471 27.8915C18.8606 28.4779 18.8609 29.4289 19.4476 30.0156L20.1731 30.7411C20.7598 31.3279 21.7109 31.3281 22.2973 30.7417C22.8837 30.1553 22.8835 29.2042 22.2968 28.6175L21.5713 27.892Z"
          fill="#F59E0B"
        />
        <path
          d="M26.7094 20.9614L26.3781 20.63C25.8831 20.1351 25.0807 20.1351 24.5858 20.6301L23.5278 21.688C23.0329 22.1829 23.0329 22.9854 23.5278 23.4803L23.8592 23.8117C24.3541 24.3066 25.1565 24.3066 25.6515 23.8116L26.7094 22.7537C27.2044 22.2588 27.2044 21.4563 26.7094 20.9614Z"
          fill="#F59E0B"
        />
        <path
          d="M31.1015 25.3549L30.7702 25.0235C30.2752 24.5286 29.4728 24.5286 28.9779 25.0235L27.9199 26.0815C27.425 26.5764 27.425 27.3789 27.9199 27.8738L28.2513 28.2051C28.7462 28.7001 29.5486 28.7001 30.0436 28.2051L31.1015 27.1472C31.5964 26.6523 31.5964 25.8498 31.1015 25.3549Z"
          fill="#F59E0B"
        />
        <path
          d="M35.4946 29.7462L35.1632 29.4149C34.6683 28.9199 33.8659 28.9199 33.371 29.4149L32.313 30.4728C31.8181 30.9678 31.8181 31.7702 32.313 32.2651L32.6444 32.5965C33.1393 33.0914 33.9417 33.0914 34.4366 32.5965L35.4946 31.5385C35.9895 31.0436 35.9895 30.2412 35.4946 29.7462Z"
          fill="#F59E0B"
        />
        <path
          d="M18.8863 32.3346L14.5752 28.0219L14.3682 26.8854C14.3643 26.8618 14.368 26.8376 14.3788 26.8162C14.3895 26.7948 14.4067 26.7774 14.4279 26.7663C14.4491 26.7553 14.4733 26.7512 14.4969 26.7547C14.5206 26.7582 14.5425 26.769 14.5597 26.7857L19.4966 31.7242L18.8863 32.3346Z"
          fill="#0F172A"
        />
        <g clipPath="url(#clip0_444_4251)">
          <path
            d="M51.942 32.4324C52.0745 33.1461 52.4232 33.8034 52.9422 34.3176C53.5012 34.7979 54.2301 35.0408 54.9699 34.9932C55.5684 35.0187 56.162 34.877 56.6825 34.5845C57.1117 34.3223 57.4655 33.9559 57.71 33.5203C57.9639 33.0576 58.1332 32.5544 58.2101 32.0338C58.301 31.4672 58.3468 30.8946 58.3471 30.321V17.4831H60.2857V31.1352C60.2829 31.793 60.1966 32.4478 60.0288 33.0845C59.8613 33.7598 59.5469 34.3913 59.1075 34.9349C58.6681 35.4786 58.1141 35.9216 57.4839 36.2331C56.6874 36.6124 55.8092 36.7944 54.9254 36.7635C53.7486 36.8048 52.5918 36.4551 51.6407 35.7703C50.7242 35.0416 50.134 33.9876 49.9966 32.8345L51.942 32.4324Z"
            fill="white"
          />
          <path
            d="M74.2261 20.5845C73.3835 19.3637 72.1539 18.7534 70.5372 18.7534C70.0371 18.7535 69.5394 18.8206 69.0575 18.9527C68.588 19.078 68.1448 19.2851 67.7491 19.5642C67.3609 19.8424 67.0432 20.2055 66.8209 20.625C66.5814 21.0986 66.4637 21.623 66.4784 22.152C66.4562 22.5134 66.5092 22.8755 66.6341 23.2159C66.7589 23.5564 66.9531 23.868 67.2045 24.1317C67.7272 24.6255 68.3396 25.0175 69.0096 25.2872C69.7775 25.6048 70.5645 25.8756 71.3661 26.098C72.1869 26.3245 72.9778 26.6454 73.7226 27.0541C74.4325 27.447 75.0482 27.9863 75.5276 28.6352C76.052 29.4307 76.3063 30.3701 76.2538 31.3176C76.2653 32.1165 76.0758 32.9058 75.7023 33.6149C75.3467 34.2819 74.8504 34.8659 74.2466 35.3277C73.6389 35.7918 72.9555 36.1505 72.2258 36.3885C71.5028 36.6339 70.7435 36.7595 69.9789 36.7601C68.8375 36.7647 67.7068 36.5442 66.6531 36.1115C65.5775 35.6558 64.6505 34.9157 63.9746 33.973L65.7523 32.723C66.164 33.4167 66.755 33.9903 67.4648 34.3852C68.2616 34.8157 69.1598 35.0302 70.0679 35.0068C70.5607 35.0054 71.0504 34.9302 71.5202 34.7838C71.9904 34.6344 72.4308 34.4058 72.8218 34.1081C73.2071 33.8146 73.5306 33.4497 73.774 33.0338C74.03 32.5882 74.1601 32.083 74.1507 31.5709C74.1721 30.9988 74.0272 30.4327 73.7329 29.9392C73.449 29.5004 73.0714 29.128 72.6265 28.848C72.1384 28.5422 71.6138 28.297 71.0647 28.1183C70.4824 27.9246 69.8819 27.7297 69.263 27.5338C68.6502 27.3386 68.0478 27.1131 67.458 26.8581C66.8943 26.6193 66.3683 26.3019 65.8961 25.9155C65.4281 25.5207 65.0519 25.031 64.7932 24.4797C64.4918 23.7977 64.349 23.0578 64.3754 22.3142C64.3556 21.4959 64.5353 20.6849 64.8994 19.9494C65.2324 19.29 65.7111 18.7127 66.3003 18.2602C66.892 17.8132 67.5636 17.4797 68.28 17.277C69.0146 17.0667 69.7757 16.9598 70.5406 16.9595C71.5426 16.9461 72.5382 17.118 73.476 17.4662C74.427 17.8528 75.2677 18.4629 75.9249 19.2432L74.2261 20.5845Z"
            fill="white"
          />
          <path
            d="M97.7398 26.8817C97.7556 28.2365 97.4995 29.5811 96.9863 30.8378C96.5127 32.0049 95.8046 33.0654 94.9046 33.9555C94.0046 34.8455 92.9312 35.5467 91.7493 36.0169C89.2189 37.005 86.4018 37.005 83.8714 36.0169C82.6894 35.5461 81.616 34.8447 80.7155 33.9547C79.815 33.0648 79.106 32.0046 78.631 30.8378C77.6263 28.2924 77.6263 25.4677 78.631 22.9223C79.106 21.7555 79.815 20.6953 80.7155 19.8054C81.616 18.9154 82.6894 18.214 83.8714 17.7433C86.4018 16.7551 89.2189 16.7551 91.7493 17.7433C92.9312 18.2134 94.0046 18.9146 94.9046 19.8047C95.8046 20.6947 96.5127 21.7552 96.9863 22.9223C97.4995 24.1803 97.7556 25.5258 97.7398 26.8817V26.8817ZM95.6402 26.8817C95.6453 25.8272 95.4634 24.7799 95.1025 23.7872C94.7601 22.8333 94.2344 21.9535 93.5543 21.1959C92.8656 20.4419 92.0259 19.8368 91.0882 19.4189C90.0504 18.9799 88.9328 18.7535 87.8035 18.7535C86.6742 18.7535 85.5567 18.9799 84.5188 19.4189C83.5821 19.8369 82.7436 20.442 82.0561 21.1959C81.3748 21.9526 80.849 22.8327 80.508 23.7872C79.7911 25.7896 79.7911 27.9739 80.508 29.9763C80.8498 30.9294 81.3756 31.8082 82.0561 32.5642C82.7435 33.3192 83.582 33.9254 84.5188 34.3446C85.5572 34.7816 86.6746 35.0068 87.8035 35.0068C88.9325 35.0068 90.0498 34.7816 91.0882 34.3446C92.0261 33.9254 92.8657 33.3192 93.5543 32.5642C94.2337 31.8074 94.7593 30.9288 95.1025 29.9763C95.4631 28.9836 95.645 27.9363 95.6402 26.8817V26.8817Z"
            fill="white"
          />
          <path
            d="M114.407 33.4156H114.458V17.4797H116.411V36.2838H113.986L102.611 20.1824H102.559V36.277H100.617V17.4797H103.052L114.407 33.4156Z"
            fill="white"
          />
          <path
            d="M120.603 17.7162H124.802V24.7297H132.96V17.7162H137.163V36.5236H132.96V28.3953H124.802V36.5236H120.603V17.7162Z"
            fill="#FDE047"
          />
          <path
            d="M141.201 17.7162H154.155V21.5338H145.4V25.0405H153.669V28.8648H145.4V32.6824H154.648V36.5101H141.211L141.201 17.7162Z"
            fill="#FDE047"
          />
          <path
            d="M158.005 17.7162H165.383C166.31 17.7123 167.236 17.8064 168.143 17.9966C168.959 18.1605 169.735 18.4758 170.431 18.9257C171.094 19.3706 171.631 19.9738 171.993 20.679C172.407 21.5366 172.605 22.4798 172.572 23.429C172.608 24.6386 172.238 25.8259 171.521 26.8074C170.766 27.7701 169.66 28.4041 168.438 28.5743L173.284 36.5169H168.249L164.266 29H162.19V36.5169H157.991L158.005 17.7162ZM162.204 25.4864H164.677C165.054 25.4864 165.451 25.4864 165.872 25.4459C166.264 25.4265 166.651 25.3456 167.016 25.2061C167.353 25.0788 167.646 24.8625 167.866 24.5811C168.114 24.2333 168.235 23.8128 168.208 23.3885C168.238 23.02 168.154 22.6513 167.967 22.331C167.78 22.0107 167.498 21.754 167.16 21.5946C166.829 21.4369 166.474 21.3341 166.109 21.2905C165.725 21.2372 165.338 21.2101 164.951 21.2094H162.211L162.204 25.4864Z"
            fill="#FDE047"
          />
          <path
            d="M174.429 27.1182C174.409 25.7187 174.671 24.3292 175.2 23.0304C175.679 21.8512 176.409 20.7868 177.34 19.9087C178.278 19.037 179.386 18.3633 180.598 17.929C183.265 17.0101 186.17 17.0101 188.838 17.929C190.049 18.3641 191.157 19.0376 192.096 19.9087C193.026 20.7877 193.756 21.8518 194.236 23.0304C195.259 25.6634 195.259 28.5764 194.236 31.2094C193.756 32.388 193.026 33.4521 192.096 34.3311C191.157 35.2021 190.049 35.8757 188.838 36.3108C186.17 37.2297 183.265 37.2297 180.598 36.3108C179.386 35.8765 178.278 35.2028 177.34 34.3311C176.409 33.453 175.679 32.3886 175.2 31.2094C174.67 29.9095 174.408 28.5189 174.429 27.1182ZM178.792 27.1182C178.783 27.9472 178.924 28.7711 179.21 29.5506C179.474 30.2617 179.882 30.9124 180.409 31.4628C180.936 32.0073 181.573 32.4365 182.279 32.7229C183.846 33.3265 185.586 33.3265 187.153 32.7229C187.86 32.4363 188.498 32.0071 189.027 31.4628C189.553 30.9114 189.96 30.2611 190.226 29.5506C190.778 27.9806 190.778 26.2727 190.226 24.7027C189.963 23.987 189.555 23.3317 189.027 22.777C188.498 22.2327 187.86 21.8035 187.153 21.5168C185.586 20.9133 183.846 20.9133 182.279 21.5168C181.573 21.8033 180.936 22.2326 180.409 22.777C179.88 23.3309 179.472 23.9864 179.21 24.7027C178.927 25.4771 178.786 26.295 178.792 27.1182V27.1182Z"
            fill="#FDE047"
          />
        </g>
        <defs>
          <clipPath id="clip0_444_4251">
            <rect
              width="146"
              height="20"
              fill="white"
              transform="translate(50 17)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}
