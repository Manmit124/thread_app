import Image from "next/image";
import { currentUser } from "@clerk/nextjs";

import { communityTabs } from "@/constants";

import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ThreadsTab from "@/components/shared/ThreadTab";
import { fetchCommunityDetails } from "@/lib/actions/community.actions";
import UserCard from "@/components/cards/UserCard";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;
  const communityDetails = await fetchCommunityDetails(params.id);

  return (
    <section>
      <ProfileHeader
        accountId={communityDetails.id}
        authUserId={user.id}
        name={communityDetails.name}
        username={communityDetails.username}
        imgUrl={communityDetails.image}
        bio={communityDetails.bio}
        type="Community"
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {communityTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className="tab">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="max-sm:hidden">{tab.label}</p>

                {tab.label === "Threads" && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {communityDetails.threads.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="thread" className="w-full text-light-1">
            {/* @ts-ignore */}
            <ThreadsTab
              currentUserId={user.id}
              accountId={communityDetails.id}
              accountType="Community"
            />
          </TabsContent>
          <TabsContent value="members" className="w-full text-light-1">
          <section className="mt-9 flex  flex-col gap-10">
            {communityDetails?.members.map((member:any) =>(
                <UserCard
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    username={member.username}
                    
                    imgUrl={member.imgUrl}
                    personType="User"            
                
                />
            ))

            }

          </section>
         
          </TabsContent>
          <TabsContent value="requests" className="w-full text-light-1">
            {/* @ts-ignore */}
            <ThreadsTab
              currentUserId={user.id}
              accountId={communityDetails.id}
              accountType="Community"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
export default Page;

// import ProfileHeader from "@/components/shared/ProfileHeader";
// import { profileTabs } from "@/constants";
// import { fetchUser } from "@/lib/actions/user.actions";
// import { currentUser } from "@clerk/nextjs";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Image from "next/image";
// import { redirect } from "next/navigation";
// import ThreadsTab from "@/components/shared/ThreadTab";

// async function Page({ params }: { params: { id: string } }) {
//   const user = await currentUser();
//   if (!user) return null;

//   const userInfo = await fetchUser(params.id);
//   if (!userInfo?.onboarded) redirect("/onboarding");

//   return (
//     <section>
//       <ProfileHeader
//         accountId={userInfo.id}
//         authUserId={user.id}
//         name={userInfo.name}
//         username={userInfo.username}
//         imgUrl={userInfo.image}
//         bio={userInfo.bio}
//       />
//       <div className="mt-9 ">
// <Tabs defaultValue="threads" className="w-full">

//     <TabsList className="tab">
//         {profileTabs.map((tab)=>(
// <TabsTrigger key={tab.label} value={tab.value} className="tab">

//     <Image
//     src={tab.icon}
//     alt="tab icon"
//     width={24}
//     height={24}

//     />
// <p className="max-sm:hidden">{tab.label}</p>
// {tab.label === "Threads" && (
//                   <p className='ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2'>
//                     {userInfo.threads.length}
//                   </p>
//                 )}
// </TabsTrigger>
//         ))
// }

//     </TabsList>

//     {profileTabs.map((tab) => (
//             <TabsContent
//               key={`content-${tab.label}`}
//               value={tab.value}
//               className='w-full text-light-1'
//             >
//               {/* @ts-ignore */}
//               <ThreadsTab
//                 currentUserId={user.id}
//                 accountId={userInfo.id}
//                 accountType='User'
//               />
//             </TabsContent>
//           ))}
// </Tabs>
//       </div>
//     </section>
//   );
// }
// export default Page;
