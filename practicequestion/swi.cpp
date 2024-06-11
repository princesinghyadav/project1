#include<iostream>
using namespace std ;
int main () 
{
 int days;
 cin>>days;
 switch (days)
 {
 case 7:
 cout<<"sunday"<<endl;
 break;
  case 1:
 cout<<"monday"<<endl;
 break;
 case 2:
 cout<<"tuesday"<<endl;
 break;
 case 3:
 cout<<"thursday"<<endl;
 break;
 case 4:
 cout<<"friday"<<endl;
 break;
 case 5:
 cout<<"saturday"<<endl;
 break;
 case 6:
 cout<<"wednesday"<<endl;
 break;
 default :
 cout<<"default value";
 break ;
 }

    return 0;
}