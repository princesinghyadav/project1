#include<iostream>
#include<string>
using namespace std;
int main () {
    struct poke {
         int hp;
         string name;
    }poke;
    poke.name="prince";
    cout<<poke.name;
}