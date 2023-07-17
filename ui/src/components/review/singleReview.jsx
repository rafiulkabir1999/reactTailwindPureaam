import React from 'react';
import {ImStarEmpty} from 'react-icons/im'

function singleReview(props) {

   const Review=props.UserReview;
            
          

    return ( 
          <div className=" w-11/12 mx-auto grid grid-row-1 grid-flow-row lace-content-center gap-4 md:w-full md:grid-cols-4 md:grid-flow-col">
        {Review.map((e)=>(
              
               
            <div className=" flex-col my-4 shadow bg-white   ">

            
                    <div className="flex p-2 rounded border-b-2 ">
                        <div className="p-2">
                    <img className='w-14 h-14 border-2 rounded-full p-2'src="../pureaamlogo_big.png" alt="" />
                    </div>

                <div className="flex p-2  text-gray  items-center grow">
                    <p className='text-xl'>{e.Name}</p>
            
                </div>
                 
                 <span className='items-center bg-yellow-300 rounded-full p-2 w-10 h-
                 
                 10 my-auto'>{e.Receive}</span>
              
            </div>

            <div className="flex p-2 rounded">
                <p className="p-2 text-left text-gray-500">
                {e.Review}
                </p>

               
            </div>
            <div className="grid grid-cols-3  gap-2 p-2">
                <img  className='p-2'src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUPEBAPEA8QEBIPEBAPDxUPEBAPFRUWFhUVFxUYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDi0ZFRkrKy03Kzc3LSstNysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOsA1wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUBAgQGBwj/xABBEAACAQICBgcGAwUHBQAAAAAAAQIDEQQhBRIxQVFhBhMiMnGBsQdykaHB8DNi0SNSkrLhFBVCc4Ki8RYkQ6PC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD7iARVJ7l5sDaVTcs2aaz3u3gR625EkYlRjLmzPxN0jNgrRSfH4myqcV5rNGXE1cQN0zJDs5ejN4TvyZBuAAAAAAAAAAAAAAAAAAAAAAADSrKy5s5py3LzN687NvhkvE5kyongyaLORSJoSKJ0bI0izFStGNtaUY32a0kr/EipQAyDVojlEkbMNlGKc9z2+pIQyRJTlfxA2ABAAAAAAAAAAAAAAAAAAAFXjKudubZFGZHpF2n5fVnN1jtZM0jvVVbLq/idFKRSKN9h3YGq+69sfTcBw9O+kLwODdWFuuqTjQot2tGclKTlnllGMnnldK58aljnOTqVW6lSXfnN603a+Tcs8s9ryz4Tcfd+2qtahhYca9Se39yCV/8AefM6U/v72bPlysZqve+z3pFUo4unhdZyw1eTpdW+7SnaWrKEXnHtR1Wstruro+ws/P8A0EWtpXBx41ptrdeFCpNfyr5bVqtff5MCOUhFkM5ZmYSNImuaOermbXNaiyAlhWTyeT+T8yQrcC9aFnm4SlB+Ty+VjqpVLPVfk/oRXQACAAAAAAAAAAAAAAAACj03C0lLc8vjn+pwRkeg0nhusptb1mjzMJWye1ZNFR3YZZkso6tRP95NfX9TkoVbNM6J19aGs+9CpZ+DyXq/gUfO/bhUevgktmpi2/G+Htv5P+neXzqNT7+14cN2zJHvfbdP9rg/8rEfz0f0/wCNq+b6339+P3seVe59lS1tLUfyU68//XKP/wBP57Mz7vVeR8I9jUr6WS4YSu/91NffhytH7pXlkWDjqVMySmyvq1u1Y7aDyKjqTMTZiLI69RJXexK78AI9G/8AkfGs/wCSB01YkejabVON9sr1HxTk728r28ieoFb4ed1zWTJDlwr7TXFX+H/J1GQAAAAAAAAAAAAAAAAKDTuAcX10Fl/jS3cy/MNAeNhUJ8PLKouMYz/hf9SbS+iHC9Skm4bZQWbhzXFehwaPqXclxpT+j+hUeS9suiqk6GHxkE5Qw/WU69v8EKjg4zf5U4NN/mR8l1rffh9/eX6nwGcEnmmrNPNNM4qfQvRqn1n934PWvdf9vDVT23UbWTvyCvnvsN6P1VOppKpFxpTo9Rhm7rrVKUZVJpfurq4JPfnsSSX1fEvI6ZK2S2LcV+kJ2hJ8IsIocHJzqSk9jk7eG4vaTyKLBVEkWEcUiix1zmn+0mqW59qp/lrd5uy83wOHEY+yyu27JJZtt5JJcS20ZhXTheedWdpVHw4RXJet+JB23I6jNmyCrMqtsJ337v1R2HLgI5OX7zy8F9s6jIAGspJbQNjWU0v03mjk3yXzMLki4Ntd8PizGu+XwMqHE2SQEeu/tf1MqtxVjexiUQNkzJzuLWcfhuZLSqX8VtXAg3AAAAACqx+jKabrxWrNRnrKPdlrRazXHO5akGO/Cn7rAr9Gd1eBZwKvRb7CLSBUYqFNp2pq0Kj4RfoXNQpNN0HUpSpxTbnkkrXfhfIDymGxx1Rxd2opNybsoxV5N8kcVHAQvadSorOzjqKEk+Dve3wL3Ayp0lanFRvk5d6cvGTzty2FVYaKwGo+tq2dX/DFZxpJ7c98ue7YuLs+tKiOMMvGAWc6xBTvUlqrZtk+EThozlVlq01d73uiuLZf4TDKnHVWb2ylvbIJoqystiyRkEdarqq/wXFkCrVt48DRLe82yCF27vNsnit72lRlLj8DdMwZQGUZsYPIdOPaJhNGpwk+vxbV4YWm+1sydSWapx2bc+CYV6vE14U4SqVJxp04LWnOclGEYre28kj5h0s9rMY3paPjrtZPEVI2gt3Yg9vvS/hksz5zpnpRi9Jy63E1UqUZPqsNTuqUJKzXZ2zla/ad3wssiumlsWS2fmcJbLLdn9og6v8AqzScKvXrSOMdTWd4zqa9Hkupa1LW5I+3+zzpb/eOF69xjTxNGXVYmnHuOVk1KN89WSzV9jTWdrv89dTOo9WnCVSbbtCmnJuotySzlJ22K7yPt3se6JV8DQrVcVHq6+LnTfU6yk6dKmpautbJSbqTbV3ZWvndIPpMZXV1sYIcNLNx819fvmAJwAAIcb+HL3WTEOM/Dl7r9AKvRfdRbUyn0X3UXFMqMVCvlFutTW5SlJ+UXYsZnJTX7WPg/RgbY/RVKtnOHa3Tj2Zrz3+ZT1ejEl+HWy4VI5/xL9D0oIry0ej1ffUpW5OT+h2Yfo4ttWpKf5YrUXm838LF6AI6FCMI6sIqMVuSsSA5amJztD+Ld5AdLfE4Ks9aV87LJfqSxhfN5vmSKBRpSW8kMagRUbIyamUwPO+0bTVTBaKxOKo5VadOMacsnqTqTjSU7PJ6rnfPgfkzrpSk5zlKU5ycpSk3KUpN3cm3m23vP2XpbR9PE0KmGrR1qVanKnNLJ6sla6e5ranxR+fdL+xHSNOq44aVDEUXLsVHUVKaj+eMtj91slV4jR+OcPB2vayeXP4/E9z0P6F4vSVpwh/ZsHd3xFVO04vdTjk6vlaPPKx7boP7G6GHtW0jKGLrLNUEr4WD/Mmr1X4pLk9p9USsrLJLJJZJIYKPov0SwuAhahDWqNWlXqWlVlyva0Y/liki6Zs2aSYRHGVprzT+H9ARVXmALEAEUIcZ+HL3X6ExDjPw5e6/QCp0X3UW9Mp9F91FxSKjMzlgv2sfB/U6pHND8SPg/RgdoAIoAYk7K/ADlxlV9xf6ny4GlKJDVrJPNq7zJKNVPYyjqibGsGbMUDDQMga3BiQRUZBgXAzcw2auRo5AbuRpORpKZz1q1gJsP2qi5Jt+n1BJoun2dd7Z5r3d36gyrtAAAhxn4cvdfoTEOM/Dl7r9AKfRfdRc0il0X3UXVIqMyOeH4i8H6M6JEFNdtcv6gdYAIoRYqVoSfBXJSLFU9aEo8YtedgPC6U0rqXm8+RzaG6UwnUVOzpzbtHWd4TfC+5nJp2m3E8fUhZmh9wweJUkd0ZHz3ofp1zjqTd6lNK7e2dPYpeK2PxT3nuKVa6IOsEaqBzGDMmRa9jMpHNVnmVE7qGrqHM6pq64HS5GkqhyTxJyVsYB21sTY0wFF1p5/hxfafF/unLgcLOu96pp9qX0XF+h6ahRjCKjFWitiIqQAEAAACHF/hy91+hMRYv8ADl7svQCk0X3S6olHomaccnfMu6MlbaviVG8jl1rVI83byOiVRcV8TlbvUj4/RgWAAIoAAPF9JtH6tR5dip2lylvR8/0phXGWw+1aSwSrU3B5PbF8JHgdJ6Lu3CatNZFHj9E4nqq0Kl8lK0+cHlL5N/I+o4DE2vF7Ytr4HjsD0VlOaUnanftP8u+xfVq9qsmtjk7FHo4Vzfrygp4zmTrGAWsqpxYzE2scs8ZkU+OxUnJ9mStlnFoC2ljeZDPG8yhni+ZinVlJ2XxYRb1MYWuhtDuqlVqu1Nt2gsnKztm9yy3fI4tG4De82et0bC1KK8fVkE9OCilGKSSySSskjYAigAAAAAYaMgD5bX6M6UwVbFR0bVw/9jxk51oxrScJYavNZzpvVave2TyaS2bTlw/RjTjzqaW1W1Z6tGhPxzyPrhq4LgvgB5DCYWdKnBVpPFVoRSbWpT6yaXeaWSvyTLzRNGrK1auowlaypxu4xvzaTdlld2vm7LJFnGKWxJeCsbAAAAAAA4tI6OjVWeU13ZL0fFHaAPI4zD1aStJO37y7r8yt1D6AzkqaNoyzdKF+St6F0eLUCfDYeU3aEXJ8lkvF7F5nrIaLorZSh5rW9TrjFJWSSXBKyGio0ZoVQanUtKazUVnGL482VnSZNTnz1WvDVS+jPVnmulq3/kXqwPCzjeRcaKwt2jiw9G8j1WicLksioscJQtEs8KuwvP1I4wtElw3dXn6kqpQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAPNdLd3ur1Z6U890ojdr3V6ssHn9G4e7PXYKjaKKjRmH2HoqMeyio2msjOG7q8/UVNgw3dXn6kqpQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAKXTsLyj4L1ZdFZpVdpeH1ZYOTDyjG2tKMb7NaSjf4lzDYUqm4zbUJT/AGd2o2vtfF5lrgYWpRV01a61c42eaUeSvZckES1Ngw3dXn6ipsGG7q8/UVUoAIAAAAAAAAAAAAAAAAAAAAAAAAAAAFZpHvfL5FmVuke8vH6Fg0oLO+/ZfkWFOCUUkklduy4t3fzZX0CyWxBGtTYMN3F5+oqbDGE7i8/ViqmABAAAAAAAAAAAAAAAAAAAAAAAAAAAA8x0rr16VWlUhGU8O+zNQjras09srK6TTtw7PNX9OAKd4mnqKaU45Xsk2zwHTDpXpCdRUsBTxNNLsqSpa1297cotI+m4hauy682Qqo+L+JRQaAq4uGGisTUlXxErLtJRbf8ApSSPV4em4wjF5tJJvi95ilRis0s7bXm/mSkAAAAAB//Z" alt="" />
                <img  className='p-2'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeL_Sq7UIkxMXwtommwEtLj3cffWC5OjZqifWUClYwV42X8fg0lOKu-XOUJZ56xa12i4&usqp=CAU" alt="" />
                <img  className='p-2'src="https://media.croma.com/image/upload/v1664411402/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/251322_0_jiy60q.png" alt="" />
            </div>

            <div className="flex p-2 rounded items-center justify-between">
                <div className="flex bg-yellow-200 px-7 rounded-full space-x-2 py-2 shadow ">
                      <ImStarEmpty/>
                      <ImStarEmpty/>
                      <ImStarEmpty/>
                      <span className='text-sm px-4 text-gray-400'>{e.Ratting}</span>
                </div>
                <div>
                    <span>{e.Date}</span>
                </div>
            </div>
 </div>
                
            ))}
         

       

     </div>
     
        
       
           
     
  
 );
         
 
    
}

export default singleReview;