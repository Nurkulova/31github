#  Dictionaries

band = {
    "vocals": "Plant",
    "guitar": "Page",
}

band2 = dict(vocals="Plant", guitar="Page")

print(band)
print(band2)

print(type(band))
print(len(band))

print(band["vocals"])
print(band.get("guitar"))

print(band.keys())
print(band.values())
print(band.items())

print("guitar" in band)

band["vocals"] = "Coverdale"
band.update({"bass": "JPJ"})

print(band)

print(band.pop("bass"))
print(band)


band["drums"] = "Bonham"
print(band)

print(band.popitem())
print(band)

band["drums"] = "Bonham"
del band["drums"]
print(band)

band2.clear()
print(band2)

del band2

# band2 = band 
# print("Bad copy!")
# print(band2)
# print(band)

# band["drums"] = "Ch"
# print(band)

band2 = band.copy()
band2["dums"] = "Ch"
print("Good copy!")
print(band)
print(band2)

band3 = dict(band)
print("Goood copy")
print(band3)


# Nested dictionary

member1 = {
    "name": "Plant",
    "instument": "vocals"
}

member2 = {
    "name": "Page",
    "instument": "guitar"
}

band = {
    "member1": member1,
    "member2": member2
}

print(band)
print(band["member1"]["name"])


nums = {1, 2, 3, 4}

nums2 = set((1,2,3,4))

print(nums)
print(nums2)
print(type(nums))
print(len(nums))

nums = {1, 2, 3, 4}
print(nums)


