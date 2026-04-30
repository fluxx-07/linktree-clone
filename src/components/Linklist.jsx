import LinkCard from "./LinkCard"
import codechef from "../assets/cc-img.png"
import codeforces from "../assets/cfs_image.png"
import leetcode from "../assets/lc-img.png"
import github from "../assets/githubimg.png"
import linkedin from "../assets/linkedin-img.png"
import instagram from "../assets/instagram-img.png"

function LinkList() {
  return (
    <div className="w-full max-w-xl mt-8 flex flex-col gap-7">

      <LinkCard 
        icon={codeforces}
        title="CODEFORCES" 
        url="https://codeforces.com/profile/flux_07"
      />

      <LinkCard 
        icon={codechef} 
        title="CODECHEF" 
        url="https://www.codechef.com/users/flux_07"
      />

      <LinkCard 
        icon={leetcode}
        title="LEETCODE" 
        url="https://leetcode.com/u/flux_07/"
      />

      <LinkCard 
        icon={github} 
        title="GITHUB" 
        url="https://github.com/fluxx-07"
      />

      <LinkCard 
        icon={linkedin}
        title="LINKEDIN" 
        url="https://www.linkedin.com/in/piyushkumar-flux07/"
      />

      <LinkCard 
        icon={instagram}
        title="INSTAGRAM" 
        url="https://www.instagram.com/piyushkr.007/"
      />
      
    </div>
  )
}

export default LinkList