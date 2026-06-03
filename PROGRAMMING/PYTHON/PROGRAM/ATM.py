def ATM(amt=0):
    if(not amt%100==0):
        print("Enter valid amount")
        exit()

    # find the no. of 500 notes
    count_of_500 = amt//500

    # find the no. of 200 notes
    amt = amt - (count_of_500 * 500)
    count_of_200 = amt//200

    # find the no. of 100 notes
    amt = amt - (count_of_200 * 200)
    count_of_100 = amt//100

    # find the no. of 50 notes
    amt = amt - (count_of_100 * 100)
    count_of_50 = amt//50



    print(f"""
    Currency Counts:
    - 500 x {count_of_500} = {count_of_500 * 500}
    - 200 x {count_of_200} = {count_of_200 * 200}
    - 100 x {count_of_100} = {count_of_100 * 100}
    - 50 x {count_of_50} = {count_of_50 * 50}
    """)

ATM(569)