import Navbar from '../layout/navbar';
import styles from './../../styles/Home.module.css';

const BlogIndex = (props: any) => {

    return (

        <>
            <Navbar></Navbar>

            <main className={styles.main}>

                <div className="bg-slate-800 relative px-20 pt-[50px] pb-[50px] lg:pt-[50px]">
                    <div className="container px-80">

                        <h1 className="text-slate-200 text-center text-2xl mb-8">Privacy Policy for Muhammadfandu Personal</h1>

                        <p>At Muhammadfandu Personal, accessible from muhammadfandu.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Muhammadfandu Personal and how we use it.</p>
                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                        <h2 className='text-xl mt-4'>Log Files</h2>
                        <p>Muhammadfandu Personal follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a>.</p>

                        <h2 className='text-xl mt-4'>Privacy Policies</h2>
                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Muhammadfandu Personal.</p>
                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Muhammadfandu Personal, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                        <p>Note that Muhammadfandu Personal has no access to or control over these cookies that are used by third-party advertisers.</p>

                        <h2 className='text-xl mt-4'>Third Party Privacy Policies</h2>
                        <p>Muhammadfandu Personal&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites. What Are Cookies?</p>

                        <h2 className='text-xl mt-4'>Children&apos;s Information</h2>
                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                        <p>Muhammadfandu Personal does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                        <h2 className='text-xl mt-4'>Online Privacy Policy Only</h2>
                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Muhammadfandu Personal. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                        <h2 className='text-xl mt-4'>Consent</h2>
                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

                    </div>
                </div>
            </main >
        </>
    )
}

export default BlogIndex;