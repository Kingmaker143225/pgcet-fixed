import { Link } from "wouter";
import { Phone, Mail, MapPin, Globe, Share2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06254D] text-white/80 pt-16 pb-0 border-t-4 border-secondary mt-auto">
      <div className="container mx-auto max-w-7xl px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand/About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-serif text-xl font-bold">
                T
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white leading-tight">TG ECET</h3>
                <p className="text-xs text-secondary font-medium">TG ECET 2026</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Telangana Common Entrance Test is conducted by the Telangana State Council of Higher Education for admission into various PG courses in participating universities and their affiliated colleges.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center">
              Quick Links
              <div className="h-0.5 w-8 bg-secondary ml-3 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">About TG ECET</div></Link></li>
              <li><Link href="/important-dates"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Important Dates</div></Link></li>
              <li><Link href="/syllabus"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Syllabus & Exam Pattern</div></Link></li>
              <li><Link href="/faq"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Frequently Asked Questions</div></Link></li>
              <li><Link href="/contact"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Contact Support</div></Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center">
              Student Services
              <div className="h-0.5 w-8 bg-secondary ml-3 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/application"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Online Application</div></Link></li>
              {/* <li><Link href="/login"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Candidate Login</div></Link></li>
              <li><Link href="/hall-ticket"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Download Hall Ticket</div></Link></li>
              <li><Link href="/results"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Results & Rank Card</div></Link></li>
              <li><Link href="/mock-test"><div className="hover:text-secondary transition-colors inline-block cursor-pointer">Take Mock Test</div></Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center">
              Contact Us
              <div className="h-0.5 w-8 bg-secondary ml-3 rounded-full"></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>TG ECET [FDH & B.Sc.(Mathematics)] – 2026,
Behind Diamond Jubilee Library,
University College of Engineering ,
Osmania University, Hyderabad-500 007</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>  +91 8179979584</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>support@tgecet.ts.gov.in</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-md">
              <p className="text-xs font-medium text-white mb-1">Helpline Hours</p>
              <p className="text-xs text-white/60">10:00 AM to 5:00 PM (Working days only)</p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#041a38] py-4">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} Telangana State Council of Higher Education. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">Refund & Cancellation Policy</a>
          </div>
          <p className="text-secondary flex items-center gap-1">
            Designed for the students of Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}