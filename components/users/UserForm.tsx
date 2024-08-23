import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// import redux
import { RootState } from "@/redux"
import { addUser, updateUser, clearEditingUser } from "@/redux/features/users-slice"

// import types
import { User } from "@/types/user";

// import components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function UserForm() {

    const dispatch = useDispatch();
    const errors = useSelector((state: RootState) => state.user.errors);
    const editingUser = useSelector((state: RootState) => state.user.editingUser);

    const [cities, setCities] = useState<any[]>([]);
    const [states, setStates] = useState<any[]>([]);
    const [users, setUsers] = useState<User>({
        id: 0,
        name: '',
        email: '',
        linkedinURL: '',
        gender: '',
        address: {
            line1: '',
            line2: '',
            state: '',
            city: '',
            pin: '',
        },
    });


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/api/states`).then((response) => {
            setStates(response.data.results)
        }).catch((err) => { })
    }, [])


    useEffect(() => {
        if (editingUser) {
            setUsers(editingUser);
        } else {
            setUsers({
                id: 0,
                name: '',
                email: '',
                linkedinURL: '',
                gender: '',
                address: {
                    line1: '',
                    line2: '',
                    state: '',
                    city: '',
                    pin: '',
                },
            });
        }
    }, [editingUser]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name.includes('address')) {
            setUsers((prevUser) => ({
                ...prevUser,
                address: {
                    ...prevUser.address,
                    [name.split('.')[1]]: value,
                },
            }));
        } else {
            setUsers((prevUser) => ({ ...prevUser, [name]: value }));
        }
    };

    const handleStateChange = async (state: any) => {
        const cities = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/api/cities`).then((response) => {
            return (response.data.results)
        }).catch((err) => { })
        const citiesRes = cities.filter((c: any) => c.state_id === state);
        setCities(citiesRes)
        handleChange({
            target: {
                name: 'address.state',
                value: state,
            },
        } as any);

    };

    const handleCityChange = (city: any) => {
        handleChange({
            target: {
                name: 'address.city',
                value: city,
            },
        } as any);
    };

    const handleSubmits = (e: any) => {
        e.preventDefault();
        if (users.id === 0) {
            dispatch(addUser(users));
            // setOpen(false)
        } else {
            dispatch(updateUser(users));
            // setOpen(false)
        }
        dispatch(clearEditingUser());
    };



    return (
        <form className='space-y-4' onSubmit={handleSubmits}>
            <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        className="col-span-3"
                        value={users.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        className="col-span-3"
                        value={users.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>
            </div>
            <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="linkedin_url" className="text-right">
                        Linkedin URL
                    </Label>
                    <Input
                        id="linkedin_url"
                        name="linkedinURL"
                        className="col-span-3"
                        value={users.linkedinURL}
                        onChange={handleChange}
                    />
                    {errors.linkedinURL && <span className="text-red-500 text-xs">{errors.linkedinURL}</span>}
                </div>

                <div className="space-y-1.5 w-full">
                    <Label htmlFor="gender" className="text-right">
                        Gender
                    </Label>
                    <RadioGroup className="flex items-center space-x-2 pt-3"
                        defaultValue={users?.gender || ""}
                        onChange={(e: any) => handleChange(e)} name="gender">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="r1" />
                            <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="r2" />
                            <Label htmlFor="r2">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="others" id="r3" />
                            <Label htmlFor="r3">Others</Label>
                        </div>
                    </RadioGroup>
                    {errors.gender && <span className="text-red-500 text-xs">{errors.gender}</span>}
                </div>
            </div>

            <h3 className="font-bold">Addresses</h3>
            <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="line1" className="text-right">
                        Line 1
                    </Label>
                    <Input
                        id="line1"
                        className="col-span-3"
                        name="address.line1"
                        value={users.address.line1}
                        onChange={handleChange}
                    />
                    {errors.address?.line1 && <span className="text-red-500 text-xs">{errors.address.line1}</span>}
                </div>
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="line2" className="text-right">
                        Line 2
                    </Label>
                    <Input
                        id="line2"
                        className="col-span-3"
                        name="address.line2"
                        value={users.address.line2}
                        onChange={handleChange}
                    />
                    {errors.address?.line2 && <span className="text-red-500 text-xs">{errors.address.line2}</span>}
                </div>
            </div>
            <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="state" className="text-right">
                        State
                    </Label>
                    <Select name="address.state" value={users.address.state} onValueChange={handleStateChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>States</SelectLabel>
                                {states.map((state: any, index: number) => (
                                    <SelectItem key={index} value={state.value}>
                                        {state.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.address?.state && <span className="text-red-500 text-xs">{errors.address.state}</span>}
                </div>

                <div className="space-y-1.5 w-full">
                    <Label htmlFor="city" className="text-right">
                        City
                    </Label>
                    <Select name="address.city" value={users.address.city} onValueChange={handleCityChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={"Select a city"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>cities</SelectLabel>
                                {cities.map((city, index: number) => (
                                    <SelectItem key={index} value={city.value}>
                                        {city.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.address?.city && <span className="text-red-500 text-xs">{errors.address.city}</span>}
                </div>
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="line2" className="text-right">
                        Pin code
                    </Label>
                    <Input
                        id="pin"
                        type="number"
                        className="col-span-3"
                        name="address.pin"
                        value={users.address.pin}
                        onChange={handleChange}
                    />
                    {errors.address?.pin && <span className="text-red-500 text-xs">{errors.address.pin}</span>}
                </div>

            </div>
            <Button type="submit" className="w-full">Save changes</Button>
        </form>
    )
}
