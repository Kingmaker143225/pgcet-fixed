// import { useState } from "react";
// import { useLocation } from "wouter";
// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { supabase } from "@/lib/supabaseClient";

// export default function FullApplication() {
//   const [, navigate] = useLocation();

//   const [form, setForm] = useState({
//     paymentRef: "",
//     hallTicket: "",
//     mobile: "",
//     dob: "",

//     candidateName: "",
//     fatherName: "",
//     motherName: "",
//     gender: "",
//     email: "",
//     alternateMobile: "",

//     category: "",
//     phStatus: "",
//     localArea: "",

//     branchDiploma: "",
//     branchEntrance: "",
//     passingYear: "",
//     marksPercentage: "",

//     address: "",
//     district: "",
//     state: "Telangana",
//     pincode: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFetchPayment = async () => {
//     if (!form.paymentRef || !form.hallTicket || !form.mobile || !form.dob) {
//       alert("Enter Payment Reference ID, Hall Ticket, Mobile and DOB first");
//       return;
//     }

//     const { data, error } = await supabase
//       .from("fee_payments")
//       .select("*")
//       .eq("payment_reference_id", form.paymentRef)
//       .eq("hall_ticket_no", form.hallTicket)
//       .eq("mobile_number", form.mobile)
//       .eq("date_of_birth", form.dob)
//       .maybeSingle();

//     if (error || !data) {
//       alert("Fee payment details not found");
//       return;
//     }

//     setForm((prev) => ({
//       ...prev,
//       candidateName: data.candidate_name || "",
//       email: data.email || "",
//       alternateMobile: data.alternate_mobile || "",
//       category: data.category || "",
//       phStatus: data.ph_status || "",
//       branchDiploma: data.branch_diploma || "",
//       branchEntrance: data.branch_entrance || "",
//       passingYear: data.passing_year || "",
//     }));

//     alert("Payment verified. Continue filling the application.");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.paymentRef ||
//       !form.hallTicket ||
//       !form.mobile ||
//       !form.dob ||
//       !form.candidateName ||
//       !form.fatherName ||
//       !form.motherName ||
//       !form.gender ||
//       !form.email ||
//       !form.category ||
//       !form.phStatus ||
//       !form.branchDiploma ||
//       !form.branchEntrance ||
//       !form.passingYear ||
//       !form.address
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const { data: existing } = await supabase
//       .from("applications")
//       .select("*")
//       .eq("payment_reference_id", form.paymentRef)
//       .maybeSingle();

//     if (existing) {
//       alert("Application already submitted. Registration Number: " + existing.registration_number);
//       return;
//     }

//     const registrationNumber = "TGECET2026" + Date.now();

//     const { error } = await supabase.from("applications").insert([
//       {
//         registration_number: registrationNumber,
//         payment_reference_id: form.paymentRef,
//         hall_ticket_no: form.hallTicket,
//         mobile_number: form.mobile,
//         date_of_birth: form.dob,

//         candidate_name: form.candidateName,
//         father_name: form.fatherName,
//         mother_name: form.motherName,
//         gender: form.gender,
//         email: form.email,
//         alternate_mobile: form.alternateMobile,

//         category: form.category,
//         ph_status: form.phStatus,
//         local_area: form.localArea,

//         branch_diploma: form.branchDiploma,
//         branch_entrance: form.branchEntrance,
//         passing_year: form.passingYear,
//         marks_percentage: form.marksPercentage,

//         address: form.address,
//         district: form.district,
//         state: form.state,
//         pincode: form.pincode,
//       },
//     ]);

//     if (error) {
//       alert("Error: " + error.message);
//       return;
//     }

//     alert("Application submitted successfully!\nRegistration Number: " + registrationNumber);
//     navigate("/print-application");
//   };

//   return (
//     <SiteLayout>
//       <PageBanner title="Full Application Form" crumbs={[{ label: "Full Application Form" }]} />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <PageBox title="TG ECET - 2026 FULL APPLICATION FORM">
//           <form onSubmit={handleSubmit} className="space-y-8">

//             <Section title="Payment Verification">
//               <div className="grid md:grid-cols-4 gap-4">
//                 <Input label="Payment Reference ID *" name="paymentRef" value={form.paymentRef} onChange={handleChange} />
//                 <Input label="Hall Ticket No *" name="hallTicket" value={form.hallTicket} onChange={handleChange} />
//                 <Input label="Mobile Number *" name="mobile" value={form.mobile} onChange={handleChange} />
//                 <Input label="Date of Birth *" name="dob" value={form.dob} onChange={handleChange} placeholder="dd/mm/yyyy" />
//               </div>

//               <div className="mt-4 text-center">
//                 <button
//                   type="button"
//                   onClick={handleFetchPayment}
//                   className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
//                 >
//                   Verify Payment Details
//                 </button>
//               </div>
//             </Section>

//             <Section title="1. Personal Information">
//               <div className="grid md:grid-cols-3 gap-4">
//                 <Input label="Candidate Name *" name="candidateName" value={form.candidateName} onChange={handleChange} />
//                 <Input label="Father Name *" name="fatherName" value={form.fatherName} onChange={handleChange} />
//                 <Input label="Mother Name *" name="motherName" value={form.motherName} onChange={handleChange} />

//                 <Select label="Gender *" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
//                 <Input label="Email ID *" name="email" value={form.email} onChange={handleChange} />
//                 <Input label="Alternate Mobile" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="2. Reservation Information">
//               <div className="grid md:grid-cols-3 gap-4">
//                 <Select label="Category *" name="category" value={form.category} onChange={handleChange} options={["OC", "BC_A", "BC_B", "BC_C", "BC_D", "BC_E", "SC", "ST"]} />
//                 <Select label="Physically Challenged *" name="phStatus" value={form.phStatus} onChange={handleChange} options={["YES", "NO"]} />
//                 <Select label="Local Area Status" name="localArea" value={form.localArea} onChange={handleChange} options={["Local", "Non-Local"]} />
//               </div>
//             </Section>

//             <Section title="3. Academic Details">
//               <div className="grid md:grid-cols-4 gap-4">
//                 <Select label="Diploma Branch *" name="branchDiploma" value={form.branchDiploma} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL"]} />
//                 <Select label="Entrance Test Branch *" name="branchEntrance" value={form.branchEntrance} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL"]} />
//                 <Select label="Passing Year *" name="passingYear" value={form.passingYear} onChange={handleChange} options={["2026", "2025", "2024", "2023", "2022"]} />
//                 <Input label="Marks Percentage" name="marksPercentage" value={form.marksPercentage} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="4. Address for Communication">
//               <div className="grid md:grid-cols-4 gap-4">
//                 <div className="md:col-span-4">
//                   <label className="font-semibold block mb-2">Full Address *</label>
//                   <textarea
//                     name="address"
//                     value={form.address}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-md px-4 py-3"
//                     rows={3}
//                   />
//                 </div>

//                 <Input label="District" name="district" value={form.district} onChange={handleChange} />
//                 <Input label="State" name="state" value={form.state} onChange={handleChange} />
//                 <Input label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
//               </div>
//             </Section>

//             <div className="border border-red-400 rounded-md p-4 font-medium">
//               I declare that the above details are true and correct to the best of my knowledge.
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-10 py-3 rounded-md hover:bg-green-700"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </PageBox>
//       </div>
//     </SiteLayout>
//   );
// }

// function PageBox({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
//       <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">{title}</h2>
//       <div className="p-6">{children}</div>
//     </div>
//   );
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="border border-gray-300 bg-white p-5 rounded-md">
//       <h3 className="text-lg font-bold text-[#06254D] mb-4">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">{label}</label>
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder || label}
//         className="w-full border border-gray-300 rounded-md px-4 py-3"
//       />
//     </div>
//   );
// }

// function Select({
//   label,
//   name,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   options: string[];
// }) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">{label}</label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full border border-gray-300 rounded-md px-4 py-3"
//       >
//         <option value="">--Select--</option>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }













// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { supabase } from "@/lib/supabaseClient";

// export default function FullApplication() {
//   const [, navigate] = useLocation();

//   const [photoFile, setPhotoFile] = useState<File | null>(null);
//   const [signatureFile, setSignatureFile] = useState<File | null>(null);

//   const [sameAddress, setSameAddress] = useState(false);
//   const [declaration, setDeclaration] = useState(false);

//   const [form, setForm] = useState({
//     paymentRef: "",
//     hallTicket: "",
//     mobile: "",
//     dob: "",

//     candidateName: "",
//     fatherName: "",
//     motherName: "",
//     gender: "",
//     email: "",
//     alternateMobile: "",

//     category: "",
//     phStatus: "",
//     branchDiploma: "",
//     branchEntrance: "",
//     passingYear: "",
//     marksPercentage: "",

//     commHouseNo: "",
//     commVillage: "",
//     commDistrict: "",
//     commState: "Telangana",
//     commPincode: "",

//     permHouseNo: "",
//     permVillage: "",
//     permDistrict: "",
//     permState: "Telangana",
//     permPincode: "",
//   });

//   useEffect(() => {
//     const saved = sessionStorage.getItem("verifiedPaymentData");

//     if (!saved) {
//       alert("Please verify payment details first");
//       navigate("/application-form");
//       return;
//     }

//     const parsed = JSON.parse(saved);

//     setForm((prev) => ({
//       ...prev,
//       paymentRef: parsed.paymentRef || "",
//       hallTicket: parsed.hallTicket || "",
//       mobile: parsed.mobile || "",
//       dob: parsed.dob || "",
//     }));

//     fetchPaymentDetails(parsed);
//   }, []);

//   const fetchPaymentDetails = async (verifiedData: any) => {
//     const { data, error } = await supabase
//       .from("fee_payments")
//       .select("*")
//       .eq("payment_reference_id", verifiedData.paymentRef)
//       .eq("hall_ticket_no", verifiedData.hallTicket)
//       .eq("mobile_number", verifiedData.mobile)
//       .eq("date_of_birth", verifiedData.dob)
//       .maybeSingle();

//     if (error || !data) {
//       alert("Payment details not found");
//       navigate("/application-form");
//       return;
//     }

//     setForm((prev) => ({
//       ...prev,
//       candidateName: data.candidate_name || "",
//       email: data.email || "",
//       alternateMobile: data.alternate_mobile || "",
//       category: data.category || "",
//       phStatus: data.ph_status || "",
//       branchDiploma: data.branch_diploma || "",
//       branchEntrance: data.branch_entrance || "",
//       passingYear: data.passing_year || "",
//     }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSameAddress = (checked: boolean) => {
//     setSameAddress(checked);

//     if (checked) {
//       setForm((prev) => ({
//         ...prev,
//         permHouseNo: prev.commHouseNo,
//         permVillage: prev.commVillage,
//         permDistrict: prev.commDistrict,
//         permState: prev.commState,
//         permPincode: prev.commPincode,
//       }));
//     }
//   };

//   const uploadFile = async (file: File, folder: string) => {
//     const fileName = `${folder}/${Date.now()}-${file.name}`;

//     const { error } = await supabase.storage
//       .from("application-files")
//       .upload(fileName, file);

//     if (error) {
//       alert(error.message);
//       return "";
//     }

//     const { data } = supabase.storage
//       .from("application-files")
//       .getPublicUrl(fileName);

//     return data.publicUrl;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.paymentRef ||
//       !form.hallTicket ||
//       !form.mobile ||
//       !form.dob ||
//       !form.candidateName ||
//       !form.fatherName ||
//       !form.motherName ||
//       !form.gender ||
//       !form.email ||
//       !form.category ||
//       !form.phStatus ||
//       !form.branchDiploma ||
//       !form.branchEntrance ||
//       !form.passingYear ||
//       !form.commHouseNo ||
//       !form.commVillage ||
//       !form.commDistrict ||
//       !form.commState ||
//       !form.commPincode ||
//       !form.permHouseNo ||
//       !form.permVillage ||
//       !form.permDistrict ||
//       !form.permState ||
//       !form.permPincode
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (!photoFile) {
//       alert("Please upload candidate photo");
//       return;
//     }

//     if (!signatureFile) {
//       alert("Please upload signature");
//       return;
//     }

//     if (!declaration) {
//       alert("Please accept declaration");
//       return;
//     }

//     const { data: existing } = await supabase
//       .from("applications")
//       .select("*")
//       .eq("payment_reference_id", form.paymentRef)
//       .maybeSingle();

//     if (existing) {
//       alert(
//         "Application already submitted. Registration Number: " +
//           existing.registration_number
//       );
//       return;
//     }

//     const photoUrl = await uploadFile(photoFile, "photos");
//     const signatureUrl = await uploadFile(signatureFile, "signatures");

//     if (!photoUrl || !signatureUrl) return;

//     const registrationNumber = "TGECET2026" + Date.now();

//     const communicationAddress = `${form.commHouseNo}, ${form.commVillage}, ${form.commDistrict}, ${form.commState} - ${form.commPincode}`;
//     const permanentAddress = `${form.permHouseNo}, ${form.permVillage}, ${form.permDistrict}, ${form.permState} - ${form.permPincode}`;

//     const { error } = await supabase.from("applications").insert([
//       {
//         registration_number: registrationNumber,
//         payment_reference_id: form.paymentRef,
//         hall_ticket_no: form.hallTicket,
//         mobile_number: form.mobile,
//         date_of_birth: form.dob,

//         candidate_name: form.candidateName,
//         father_name: form.fatherName,
//         mother_name: form.motherName,
//         gender: form.gender,
//         email: form.email,
//         alternate_mobile: form.alternateMobile,

//         category: form.category,
//         ph_status: form.phStatus,
//         branch_diploma: form.branchDiploma,
//         branch_entrance: form.branchEntrance,
//         passing_year: form.passingYear,
//         marks_percentage: form.marksPercentage,

//         address: communicationAddress,
//         district: form.commDistrict,
//         state: form.commState,
//         pincode: form.commPincode,

//         permanent_address: permanentAddress,
//         permanent_district: form.permDistrict,
//         permanent_state: form.permState,
//         permanent_pincode: form.permPincode,

//         photo_url: photoUrl,
//         signature_url: signatureUrl,
//       },
//     ]);

//     if (error) {
//       alert("Error: " + error.message);
//       return;
//     }

//     sessionStorage.removeItem("verifiedPaymentData");

//     alert(
//       "Application submitted successfully!\nRegistration Number: " +
//         registrationNumber
//     );

//     navigate("/print-application");
//   };

//   return (
//     <SiteLayout>
//       <PageBanner
//         title="Full Application Form"
//         crumbs={[{ label: "Full Application Form" }]}
//       />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <PageBox title="TG ECET - 2026 FULL APPLICATION FORM">
//           <form onSubmit={handleSubmit} className="space-y-8">

//             <Section title="Step 1 Verified Details">
//               <div className="grid md:grid-cols-4 gap-4">
//                 <Input label="Payment Reference ID" name="paymentRef" value={form.paymentRef} onChange={handleChange} readOnly />
//                 <Input label="Hall Ticket No" name="hallTicket" value={form.hallTicket} onChange={handleChange} readOnly />
//                 <Input label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} readOnly />
//                 <Input label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} readOnly />
//               </div>
//             </Section>

//             <Section title="1. Personal Information">
//               <div className="grid md:grid-cols-3 gap-4">
//                 <Input label="Candidate Name *" name="candidateName" value={form.candidateName} onChange={handleChange} />
//                 <Input label="Father Name *" name="fatherName" value={form.fatherName} onChange={handleChange} />
//                 <Input label="Mother Name *" name="motherName" value={form.motherName} onChange={handleChange} />

//                 <Select label="Gender *" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
//                 <Input label="Email ID *" name="email" value={form.email} onChange={handleChange} />
//                 <Input label="Alternate Mobile" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="2. Reservation Details">
//               <div className="grid md:grid-cols-3 gap-4">
//                 <Select label="Category *" name="category" value={form.category} onChange={handleChange} options={["OC", "BC_A", "BC_B", "BC_C", "BC_D", "BC_E", "SC_I", "SC_II", "SC_III", "ST"]} />
//                 <Select label="Physically Challenged *" name="phStatus" value={form.phStatus} onChange={handleChange} options={["YES", "NO"]} />
//               </div>
//             </Section>

//             <Section title="3. Academic Details">
//               <div className="grid md:grid-cols-4 gap-4">
//                 <Select label="Diploma Branch *" name="branchDiploma" value={form.branchDiploma} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL"]} />
//                 <Select label="Entrance Test Branch *" name="branchEntrance" value={form.branchEntrance} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL"]} />
//                 <Select label="Passing Year *" name="passingYear" value={form.passingYear} onChange={handleChange} options={["2026", "2025", "2024", "2023", "2022"]} />
//                 <Input label="Marks Percentage" name="marksPercentage" value={form.marksPercentage} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="4. Address for Communication">
//               <div className="grid md:grid-cols-5 gap-4">
//                 <Input label="House No / Door No *" name="commHouseNo" value={form.commHouseNo} onChange={handleChange} />
//                 <Input label="Village / Street *" name="commVillage" value={form.commVillage} onChange={handleChange} />
//                 <Input label="District *" name="commDistrict" value={form.commDistrict} onChange={handleChange} />
//                 <Input label="State *" name="commState" value={form.commState} onChange={handleChange} />
//                 <Input label="Pincode *" name="commPincode" value={form.commPincode} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="5. Permanent Address">
//               <label className="flex items-center gap-2 mb-4 font-semibold">
//                 <input
//                   type="checkbox"
//                   checked={sameAddress}
//                   onChange={(e) => handleSameAddress(e.target.checked)}
//                 />
//                 Permanent address is same as communication address
//               </label>

//               <div className="grid md:grid-cols-5 gap-4">
//                 <Input label="House No / Door No *" name="permHouseNo" value={form.permHouseNo} onChange={handleChange} />
//                 <Input label="Village / Street *" name="permVillage" value={form.permVillage} onChange={handleChange} />
//                 <Input label="District *" name="permDistrict" value={form.permDistrict} onChange={handleChange} />
//                 <Input label="State *" name="permState" value={form.permState} onChange={handleChange} />
//                 <Input label="Pincode *" name="permPincode" value={form.permPincode} onChange={handleChange} />
//               </div>
//             </Section>

//             <Section title="6. Upload Photo and Signature">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="font-semibold block mb-2">
//                     Upload Candidate Photo *
//                   </label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
//                     className="w-full border border-gray-300 rounded-md px-4 py-3"
//                   />
//                   {photoFile && (
//                     <img
//                       src={URL.createObjectURL(photoFile)}
//                       className="w-28 h-32 object-cover border mt-3"
//                     />
//                   )}
//                 </div>

//                 <div>
//                   <label className="font-semibold block mb-2">
//                     Upload Signature *
//                   </label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setSignatureFile(e.target.files?.[0] || null)}
//                     className="w-full border border-gray-300 rounded-md px-4 py-3"
//                   />
//                   {signatureFile && (
//                     <img
//                       src={URL.createObjectURL(signatureFile)}
//                       className="w-40 h-16 object-contain border mt-3"
//                     />
//                   )}
//                 </div>
//               </div>
//             </Section>

//             <div className="border border-red-400 rounded-md p-4 font-medium">
//               <label className="flex gap-3 items-start">
//                 <input
//                   type="checkbox"
//                   checked={declaration}
//                   onChange={(e) => setDeclaration(e.target.checked)}
//                   className="mt-1"
//                 />
//                 <span>
//                   I declare that the above details are true and correct. I am
//                   responsible for the correctness of the information submitted.
//                 </span>
//               </label>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-10 py-3 rounded-md hover:bg-green-700"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </PageBox>
//       </div>
//     </SiteLayout>
//   );
// }

// function PageBox({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
//       <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
//         {title}
//       </h2>
//       <div className="p-6">{children}</div>
//     </div>
//   );
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="border border-gray-300 bg-white p-5 rounded-md">
//       <h3 className="text-lg font-bold text-[#06254D] mb-4">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   readOnly = false,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   readOnly?: boolean;
// }) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">{label}</label>
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         readOnly={readOnly}
//         className={`w-full border border-gray-300 rounded-md px-4 py-3 ${
//           readOnly ? "bg-gray-100 cursor-not-allowed" : ""
//         }`}
//       />
//     </div>
//   );
// }

// function Select({
//   label,
//   name,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   options: string[];
// }) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">{label}</label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full border border-gray-300 rounded-md px-4 py-3"
//       >
//         <option value="">--Select--</option>
//         {options.map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }










import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { supabase } from "@/lib/supabaseClient";

export default function FullApplication() {
  const [, navigate] = useLocation();

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [signatureFile, setSignatureFile] = useState<File | null>(null);
  const [sameAddress, setSameAddress] = useState(false);
  const [declaration, setDeclaration] = useState(false);

  const [form, setForm] = useState({
    paymentRef: "",
    hallTicket: "",
    mobile: "",
    dob: "",

    candidateName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    email: "",
    alternateMobile: "",

    category: "",
    phStatus: "",
    branchDiploma: "",
    branchEntrance: "",
    passingYear: "",
    marksPercentage: "",

    commHouseNo: "",
    commVillage: "",
    commDistrict: "",
    commState: "Telangana",
    commPincode: "",

    permHouseNo: "",
    permVillage: "",
    permDistrict: "",
    permState: "Telangana",
    permPincode: "",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("verifiedPaymentData");

    if (!saved) {
      alert("Please verify payment details first");
      navigate("/application-form");
      return;
    }

    const parsed = JSON.parse(saved);

    setForm((prev) => ({
      ...prev,
      paymentRef: parsed.paymentRef || "",
      hallTicket: parsed.hallTicket || "",
      mobile: parsed.mobile || "",
      dob: parsed.dob || "",
    }));

    fetchPaymentDetails(parsed);
  }, []);

  const fetchPaymentDetails = async (verifiedData: any) => {
    const { data, error } = await supabase
      .from("fee_payments")
      .select("*")
      .eq("payment_reference_id", verifiedData.paymentRef)
      .eq("hall_ticket_no", verifiedData.hallTicket)
      .eq("mobile_number", verifiedData.mobile)
      .eq("date_of_birth", verifiedData.dob)
      .maybeSingle();

    if (error || !data) {
      alert("Payment details not found");
      navigate("/application-form");
      return;
    }

    setForm((prev) => ({
      ...prev,
      candidateName: data.candidate_name || "",
      email: data.email || "",
      alternateMobile: data.alternate_mobile || "",
      category: data.category || "",
      phStatus: data.ph_status || "",
      branchDiploma: data.branch_diploma || "",
      branchEntrance: data.branch_entrance || "",
      passingYear: data.passing_year || "",
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (sameAddress && name.startsWith("comm")) {
        updated.permHouseNo = updated.commHouseNo;
        updated.permVillage = updated.commVillage;
        updated.permDistrict = updated.commDistrict;
        updated.permState = updated.commState;
        updated.permPincode = updated.commPincode;
      }

      return updated;
    });
  };

  const handleSameAddress = (checked: boolean) => {
    setSameAddress(checked);

    if (checked) {
      setForm((prev) => ({
        ...prev,
        permHouseNo: prev.commHouseNo,
        permVillage: prev.commVillage,
        permDistrict: prev.commDistrict,
        permState: prev.commState,
        permPincode: prev.commPincode,
      }));
    }
  };

  const uploadFile = async (file: File, folder: string) => {
    const fileName = `${folder}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("application-files")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      return "";
    }

    const { data } = supabase.storage
      .from("application-files")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.paymentRef ||
      !form.hallTicket ||
      !form.mobile ||
      !form.dob ||
      !form.candidateName ||
      !form.fatherName ||
      !form.motherName ||
      !form.gender ||
      !form.email ||
      !form.category ||
      !form.phStatus ||
      !form.branchDiploma ||
      !form.branchEntrance ||
      !form.passingYear ||
      !form.commHouseNo ||
      !form.commVillage ||
      !form.commDistrict ||
      !form.commState ||
      !form.commPincode ||
      !form.permHouseNo ||
      !form.permVillage ||
      !form.permDistrict ||
      !form.permState ||
      !form.permPincode
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!photoFile) {
      alert("Please upload candidate photo");
      return;
    }

    if (!signatureFile) {
      alert("Please upload signature");
      return;
    }

    if (!declaration) {
      alert("Please accept declaration");
      return;
    }

    const { data: existing } = await supabase
      .from("applications")
      .select("*")
      .eq("payment_reference_id", form.paymentRef)
      .maybeSingle();

    if (existing) {
      await navigator.clipboard.writeText(existing.registration_number);

      prompt(
        "Application already submitted.\n\nCopy your Registration Number:",
        existing.registration_number
      );

      navigate("/print-application");
      return;
    }

    const photoUrl = await uploadFile(photoFile, "photos");
    const signatureUrl = await uploadFile(signatureFile, "signatures");

    if (!photoUrl || !signatureUrl) return;

    const registrationNumber = "TGECET2026" + Date.now();

    const communicationAddress = `${form.commHouseNo}, ${form.commVillage}, ${form.commDistrict}, ${form.commState} - ${form.commPincode}`;

    const permanentAddress = `${form.permHouseNo}, ${form.permVillage}, ${form.permDistrict}, ${form.permState} - ${form.permPincode}`;

    const { error } = await supabase.from("applications").insert([
      {
        registration_number: registrationNumber,
        payment_reference_id: form.paymentRef,
        hall_ticket_no: form.hallTicket,
        mobile_number: form.mobile,
        date_of_birth: form.dob,

        candidate_name: form.candidateName,
        father_name: form.fatherName,
        mother_name: form.motherName,
        gender: form.gender,
        email: form.email,
        alternate_mobile: form.alternateMobile,

        category: form.category,
        ph_status: form.phStatus,
        branch_diploma: form.branchDiploma,
        branch_entrance: form.branchEntrance,
        passing_year: form.passingYear,
        marks_percentage: form.marksPercentage,

        address: communicationAddress,
        district: form.commDistrict,
        state: form.commState,
        pincode: form.commPincode,

        permanent_address: permanentAddress,
        permanent_district: form.permDistrict,
        permanent_state: form.permState,
        permanent_pincode: form.permPincode,

        photo_url: photoUrl,
        signature_url: signatureUrl,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    sessionStorage.removeItem("verifiedPaymentData");

    sessionStorage.setItem(
      "applicationData",
      JSON.stringify({
        registrationNumber,
        paymentRef: form.paymentRef,
        hallTicket: form.hallTicket,
        mobile: form.mobile,
        dob: form.dob,
      })
    );

    await navigator.clipboard.writeText(registrationNumber);

    prompt(
      "Application submitted successfully!\n\nCopy your Registration Number:",
      registrationNumber
    );

    navigate("/print-application");
  };

  return (
    <SiteLayout>
      <PageBanner
        title="Full Application Form"
        crumbs={[{ label: "Full Application Form" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <PageBox title="TG ECET - 2026 FULL APPLICATION FORM">
          <form onSubmit={handleSubmit} className="space-y-8">
            <Section title="Step 1 Verified Details">
              <div className="grid md:grid-cols-4 gap-4">
                <Input label="Payment Reference ID" name="paymentRef" value={form.paymentRef} onChange={handleChange} readOnly />
                <Input label="Hall Ticket No" name="hallTicket" value={form.hallTicket} onChange={handleChange} readOnly />
                <Input label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} readOnly />
                <Input label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} readOnly />
              </div>
            </Section>

            <Section title="1. Personal Information">
              <div className="grid md:grid-cols-3 gap-4">
                <Input label="Candidate Name *" name="candidateName" value={form.candidateName} onChange={handleChange} />
                <Input label="Father Name *" name="fatherName" value={form.fatherName} onChange={handleChange} />
                <Input label="Mother Name *" name="motherName" value={form.motherName} onChange={handleChange} />

                <Select label="Gender *" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
                <Input label="Email ID *" name="email" value={form.email} onChange={handleChange} />
                <Input label="Alternate Mobile" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} />
              </div>
            </Section>

            <Section title="2. Reservation Details">
              <div className="grid md:grid-cols-3 gap-4">
                <Select label="Category *" name="category" value={form.category} onChange={handleChange} options={["OC", "BC_A", "BC_B", "BC_C", "BC_D", "BC_E", "SC_I", "SC_II", "SC_III", "ST"]} />
                <Select label="Physically Challenged *" name="phStatus" value={form.phStatus} onChange={handleChange} options={["YES", "NO"]} />
              </div>
            </Section>

            <Section title="3. Academic Details">
              <div className="grid md:grid-cols-4 gap-4">
                <Select label="Diploma Branch *" name="branchDiploma" value={form.branchDiploma} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL", "B.Sc. Mathematics"]} />
                <Select label="Entrance Test Branch *" name="branchEntrance" value={form.branchEntrance} onChange={handleChange} options={["CSE", "ECE", "EEE", "MECH", "CIVIL", "Mathematics"]} />
                <Select label="Passing Year *" name="passingYear" value={form.passingYear} onChange={handleChange} options={["2026", "2025", "2024", "2023", "2022", "2021", "2020"]} />
                <Input label="Marks Percentage" name="marksPercentage" value={form.marksPercentage} onChange={handleChange} />
              </div>
            </Section>

            <Section title="4. Address for Communication">
              <div className="grid md:grid-cols-5 gap-4">
                <Input label="House No / Door No *" name="commHouseNo" value={form.commHouseNo} onChange={handleChange} />
                <Input label="Village / Street *" name="commVillage" value={form.commVillage} onChange={handleChange} />
                <Input label="District *" name="commDistrict" value={form.commDistrict} onChange={handleChange} />
                <Input label="State *" name="commState" value={form.commState} onChange={handleChange} />
                <Input label="Pincode *" name="commPincode" value={form.commPincode} onChange={handleChange} />
              </div>
            </Section>

            <Section title="5. Permanent Address">
              <label className="flex items-center gap-2 mb-4 font-semibold">
                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(e) => handleSameAddress(e.target.checked)}
                />
                Permanent address is same as communication address
              </label>

              <div className="grid md:grid-cols-5 gap-4">
                <Input label="House No / Door No *" name="permHouseNo" value={form.permHouseNo} onChange={handleChange} />
                <Input label="Village / Street *" name="permVillage" value={form.permVillage} onChange={handleChange} />
                <Input label="District *" name="permDistrict" value={form.permDistrict} onChange={handleChange} />
                <Input label="State *" name="permState" value={form.permState} onChange={handleChange} />
                <Input label="Pincode *" name="permPincode" value={form.permPincode} onChange={handleChange} />
              </div>
            </Section>

            <Section title="6. Upload Photo and Signature">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold block mb-2">Upload Candidate Photo *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                    className="w-full border border-gray-300 rounded-md px-4 py-3"
                  />
                  {photoFile && (
                    <img
                      src={URL.createObjectURL(photoFile)}
                      className="w-28 h-32 object-cover border mt-3"
                    />
                  )}
                </div>

                <div>
                  <label className="font-semibold block mb-2">Upload Signature *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSignatureFile(e.target.files?.[0] || null)}
                    className="w-full border border-gray-300 rounded-md px-4 py-3"
                  />
                  {signatureFile && (
                    <img
                      src={URL.createObjectURL(signatureFile)}
                      className="w-40 h-16 object-contain border mt-3"
                    />
                  )}
                </div>
              </div>
            </Section>

            <div className="border border-red-400 rounded-md p-4 font-medium">
              <label className="flex gap-3 items-start">
                <input
                  type="checkbox"
                  checked={declaration}
                  onChange={(e) => setDeclaration(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I declare that the above details are true and correct. I am
                  responsible for the correctness of the information submitted.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-10 py-3 rounded-md hover:bg-green-700"
              >
                Submit Application
              </button>
            </div>
          </form>
        </PageBox>
      </div>
    </SiteLayout>
  );
}

function PageBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
        {title}
      </h2>
      <div className="p-6">{children}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-300 bg-white p-5 rounded-md">
      <h3 className="text-lg font-bold text-[#06254D] mb-4">{title}</h3>
      {children}
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  readOnly = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label className="font-semibold block mb-2">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full border border-gray-300 rounded-md px-4 py-3 ${
          readOnly ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="font-semibold block mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-4 py-3"
      >
        <option value="">--Select--</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}