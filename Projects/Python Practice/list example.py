#List example hot potato

n= int(input())

players= []

for i in range (n+1):
    players.append(i+1)

position= 0

while (len(players)>1):
    for j in range(10):
        position +=1
        position%= len(players)

    print (players[position])
    del players[position]
    position%= len(players)
    
print(players[0])

#frisbee - just like hot pot


